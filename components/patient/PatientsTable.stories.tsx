import { useState } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import PatientsTable from './PatientsTable';
import '@/app/globals.css';
import { patients as rawPatients } from '@/data/fake_patients';
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from '@/utilities/data'; 
import type { DisplayPatient, DisplayPatients } from '@/types/patient';
import PatientDetailModal from "./PatientDetailModal";
import Modal from "../ui/Modal";


const displayPatients: DisplayPatients = rawPatients.map((p) => ({
  ...p,
  patientId: generatePatientId(p.id),
  fullName: generateFullname(p.first_name, p.last_name, p.middle_name),
  age: calculateAge(p.birthday),
  ageText: generateAgeText(p.birthday),
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