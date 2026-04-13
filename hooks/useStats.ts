import { useMemo } from "react";
import { DisplayPatients } from "@/types/patient";

export const useStats = (patients: DisplayPatients) => {
  return useMemo(() => {
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
      'A+': 0, 'A-': 0, 'B+': 0, 'B-': 0, 'O+': 0, 'O-': 0, 'AB+': 0, 'AB-': 0,  unknown: 0,
    };

    patients.forEach(p => {
      statusStats[p.status] ++;
      genderStats[p.gender]++;
      bloodStats[p.bloodType]++;
    });

    return { statusStats: {
      statusStats,
      genderStats,
      bloodStats,
    }};
  }, [patients]);
};