import type { Patient } from "@/types/patient";

export const fetchPatients = async (): Promise<Patient[]> => {
  const res = await fetch("https://my.api.mockaroo.com/patient_dash.json?key=bc899f70");

  if (!res.ok) {
    throw new Error("Failed to fetch patients");
  }

  return res.json();
};