"use client";
import { useMemo, useState } from "react";
import type {  DisplayPatient, PatientStatus, NewPatient, Patient } from "@/types/patient";
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from "@/utilities/data";
import { useStats } from "./useStats";
import { useAlerts } from "./useAlerts";
import usePatientsData from "./usePatientsData";

type Props = {
    searchText: string; 
    statusFilter: PatientStatus | null;
    sortBy: keyof DisplayPatient | null;
    sortDirection: "asc" | "desc";
}

const usePatients = ({ searchText, statusFilter, sortBy, sortDirection }: Props) => {
  const { data, isLoading, error } = usePatientsData();
  const [localPatients, setLocalPatients] = useState<Patient[]>([]);

  const generateId = (): number => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const createPatient = (input: NewPatient) => {
    if (!input.firstName || !input.lastName) return;

    const newPatient: Patient = {
      id: generateId(),
      first_name: input.firstName,
      last_name: input.lastName,

      middle_name: null,
      birthday: "",
      gender: "unknown",
      bloodType: "unknown",
      status: input.status,

      phone: "",
      email:  "",
      address: "",

      lastVisit: null,
      nextAppointment: null,
      doctor: null,

      condition: "",
      allergies: null,
      medications: null,
    };
    setLocalPatients((prev) => [newPatient, ...prev]);
  };

  const updatePatientStatus = (id: number) => {
    setLocalPatients((prev) => {
      const exists = prev.find(p => p.id === id);
      
      if (exists) {
        return prev.map((p) =>
          p.id === id
            ? { ...p, status: getNextStatus(p.status) }
            : p
        );
      }

      const target = data?.find((p) => p.id === id);
      if (!target) return prev;

      return [
        { ...target, status: getNextStatus(target.status) },
        ...prev,
      ];
    });
  };

  const getNextStatus = (currentStatus: Patient["status"]): Patient["status"] => {
    switch (currentStatus) {
        case "waiting": return "in_consult";  
        case "in_consult": return "done";
        case "done": return "cancelled";
        case "cancelled": return "waiting";
    }       
  };

  // Merge server and local patients, giving precedence to local changes
  const mergedPatients = useMemo(() => {
    const map = new Map<number, Patient>();

    (data ?? []).forEach((p) => map.set(p.id, p));
    localPatients.forEach((p) => map.set(p.id, p));

    return Array.from(map.values());
  }, [data, localPatients]);

  const displayPatients = useMemo(() => {
    return mergedPatients
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
  }, [mergedPatients]);

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
    return [...filteredPatients]
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

  const { alertsList } = useAlerts(sortedPatients);

  const { statusStats} = useStats(sortedPatients);

  const patients = sortedPatients;
  const totalPatients = mergedPatients.length;
  const filteredCount = patients.length;

  return {
    patients,
    totalPatients,
    filteredCount,
    alertsList,
    statusStats,
    loading: isLoading,
    error,
    createPatient,
    updatePatientStatus
  };
};

export default usePatients;