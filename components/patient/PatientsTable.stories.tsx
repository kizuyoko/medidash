import { useState } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import PatientsTable from './PatientsTable';
import '@/app/globals.css';
import { patients as rawPatients } from '@/data/fake_patients';
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from '@/utilities/data'; 
import type { DisplayPatient, DisplayPatients } from '@/types/patient';
import PatientDetailModal from "./PatientDetailModal";
import Modal from "../ui/Modal";


const displayPatients: DisplayPatients = rawPatients.map((patient) => ({
  ...patient,
  middle_name: patient.middle_name ?? "",
  nextAppointment: patient.nextAppointment ?? "",
  medications: patient.medications ?? "",

  patientId: generatePatientId(patient.id),
  fullName: generateFullname(patient.first_name, patient.last_name, patient.middle_name ?? ""),
  age: calculateAge(patient.birthday),
  ageText: generateAgeText(patient.birthday),
}));

const meta: Meta<typeof PatientsTable> = {
    title: "Components/PatientsTable",
    component: PatientsTable,
    parameters: {
        docs: {
            description: {
                component: "Table to show overview of the patients",
            },
        },
    },

}

export default meta;

type Story = StoryObj<typeof PatientsTable>;

export const WithModal: Story = {
  render: () => {
    const [selectedPatient, setSelectedPatient] = useState<DisplayPatient | null>(null);

    return (
      <>
        <PatientsTable
          patients={displayPatients}
          onClick={(patient) => setSelectedPatient(patient)}
          onSort={() => {alert("Sort clicked")}}
          sortBy={null}
          sortDirection="asc"
        />
        {selectedPatient && (
            <Modal
                isOpen={true} 
                onClose={() => setSelectedPatient(null)}
            >
                <PatientDetailModal patient={selectedPatient} />
            </Modal>
        )}
      </>
    );
  },
};