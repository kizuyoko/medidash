import { useMemo } from "react";
import { DisplayPatients } from "@/types/patient";

export const useAlerts = (patients: DisplayPatients) => {
  const alertsList = useMemo(() => {
    const noAppointment = patients.filter(p => !p.nextAppointment).length;
    const elderly = patients.filter(p => p.age >= 80).length;
    const critical = patients.filter(p => p.condition === "Critical").length;

    return  [
      { label: "patients without appointment", count: noAppointment },
      { label: "patients in critical condition", count: critical },
      { label: "patients older than 80", count: elderly },
    ];
  }, [patients]);
  
  return { alertsList };
};