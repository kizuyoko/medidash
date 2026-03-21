"use client";
import { useMemo } from "react";
import type { Patient, DisplayPatient, PatientStatus } from "@/types/patient";
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from "@/utilities/data";
import { useQuery } from "@tanstack/react-query";
import { fetchPatients } from "@/lib/api/patients";
import { useStats } from "./useStats";
import { useAlerts } from "./useAlerts";

type Props = {
    searchText: string; 
    statusFilter: PatientStatus | null;
    sortBy: keyof DisplayPatient | null;
    sortDirection: "asc" | "desc";
}

export default function usePatients({ searchText, statusFilter, sortBy, sortDirection }: Props) {

  const { data, isLoading, error } = useQuery<Patient[]>({
    queryKey: ["patients"],
    queryFn: fetchPatients,
    staleTime: 1000 * 60 * 60 , //one hour
  });

  const rawPatientsData = useMemo(() => {
    return data ?? [];
  }, [data]);

  const displayPatients = useMemo(() => {
    return rawPatientsData
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
  }, [rawPatientsData]);

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
  const totalPatients = rawPatientsData.length;
  const filteredCount = patients.length;

  return {
    patients,
    totalPatients,
    filteredCount,
    alertsList,
    statusStats,
    loading: isLoading,
    error,
  };
};