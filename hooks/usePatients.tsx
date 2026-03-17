"use client";
import { useMemo, useEffect, useState } from "react";
import { patients as rawPatients } from "@/data/fake_patients";
import type { Patient, DisplayPatient, PatientStatus } from "@/types/patient";
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from "@/utilities/data";

type Props = {
    rawPatients: typeof rawPatients;
    searchText: string; 
    statusFilter: PatientStatus | null;
    sortBy: keyof DisplayPatient | null;
    sortDirection: "asc" | "desc";
}

export default function usePatients({ searchText, statusFilter, sortBy, sortDirection }: Props) {
  const [rawPatients, setRawPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/patient_dash.json?key=bc899f70")
      .then(res => res.json())
      .then(data => {
        setRawPatients(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const displayPatients = useMemo(() => {
    return rawPatients
      .map((p) => ({
        ...p, 
        middle_name: p.middle_name ?? "",
        nextAppointment: p.nextAppointment ?? "",
        medications: p.medications ?? "",

        patientId: generatePatientId(p.id),
        fullName: generateFullname(p.first_name, p.last_name, p.middle_name ?? ""),
        age: calculateAge(p.birthday),
        ageText: generateAgeText(p.birthday),
      }));
  }, [rawPatients]);

  const searchedPatients = useMemo(() => {
    return displayPatients
      .filter((p) => {
        const keyword = searchText.trim().toLowerCase();
        return !keyword || p.fullName.toLowerCase().includes(keyword);
      });
  }, [displayPatients, searchText]);

  const filteredPatients = useMemo(() => {
    return searchedPatients
    .filter(p => !statusFilter || p.status === statusFilter);
  }, [searchedPatients, statusFilter]);

  const sortedPatients = useMemo(() => {
    return filteredPatients
    .sort((a, b) => {
        if (!sortBy) return 0;

        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (aValue === undefined) return 1;
        if (bValue === undefined) return -1;

        if (sortBy === "nextAppointment") {
          const aDate = aValue === "-" || !aValue ? null : new Date(aValue as string);
          const bDate = bValue === "-" || !bValue ? null : new Date(bValue as string);

          if (!aDate && !bDate) return 0;
          if (!aDate) return 1;
          if (!bDate) return -1;

          return sortDirection === "asc" 
            ? aDate.getTime() - bDate.getTime() 
            : bDate.getTime() - aDate.getTime();    

        }  

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc" 
            ? aValue.localeCompare(bValue) 
            : bValue.localeCompare(aValue);
        }

        return 0;
      });

  }, [filteredPatients, sortBy, sortDirection])

  const alertsList = useMemo(() => {
    const noAppointment = sortedPatients.filter(p => !p.nextAppointment).length;
    const elderly = sortedPatients.filter(p => p.age >= 80).length
    const critical = sortedPatients.filter(p => p.condition === "Critical").length

    return [
      { label: "patients without appointment", count: noAppointment },
      { label: "patients in critical condition", count: critical },
      { label: "patients older than 80", count: elderly },
    ];
  }, [sortedPatients]);

  const statusStats = useMemo(() => {
    const statusStats = {
      waiting: 0,
      in_consult: 0,
      done: 0,
      cancelled: 0,
    };
    const genderStats = {
      male: 0,
      female: 0,
      unknown: 0,
    };
    const bloodStats = {
      'A+': 0, 'A-': 0, 'B+': 0, 'B-': 0, 'O+': 0, 'O-': 0, 'AB+': 0, 'AB-': 0,  Unknown: 0,
    };

    sortedPatients.forEach(p => {
      statusStats[p.status] ++;
      genderStats[p.gender]++;
      bloodStats[p.bloodType]++;
    });

    return { statusStats, genderStats, bloodStats};
  }, [sortedPatients]);

  const patients = sortedPatients;
  const totalPatients = rawPatients.length;
  const filteredCount = patients.length;

  return {
    patients,
    totalPatients,
    filteredCount,
    alertsList,
    statusStats,
    loading,
    error,
  };
};