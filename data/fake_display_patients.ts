import { patients as rawPatients } from '@/data/fake_patients';
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from '@/utilities/data'; 
import type { DisplayPatients } from '@/types/patient';

export const getFakeDisplayPatients = (): DisplayPatients => {
  return rawPatients.map((patient) => ({
    ...patient,
    middle_name: patient.middle_name ?? "",
    nextAppointment: patient.nextAppointment ?? "",
    medications: patient.medications ?? "",

    patientId: generatePatientId(patient.id),
    fullName: generateFullname(patient.first_name, patient.last_name, patient.middle_name ?? ""),
    age: calculateAge(patient.birthday),
    ageText: generateAgeText(patient.birthday),
  }));
};