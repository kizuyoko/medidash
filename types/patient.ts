export type PatientStatus = "waiting" | "in_consult" | "done" | "cancelled";
export type Gender = 'male' | 'female';
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-' | 'Unknown';

export type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  middle_name?: string;
  birthday: string;
  gender: Gender;
  bloodType: BloodType;
  status: PatientStatus;
  phone: string;
  email: string;
  address: string;
  lastVisit?: string; // ISO or display string for now
  nextAppointment?: string;// ISO or display string for now
  doctor: string;
  condition: string;
  allergies?: string; // Later array
  medications?: string;
};

export type Patients = Patient[];

export type DisplayPatient = Patient & {
  patientId: string;
  fullName: string;
  age: number;
  ageText: string;
};

export type DisplayPatients = DisplayPatient[];