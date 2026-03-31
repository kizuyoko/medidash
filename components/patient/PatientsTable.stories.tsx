import { useState } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import PatientsTable from './PatientsTable';
import '@/app/globals.css';
import PatientDetailModal from "./PatientDetailModal";
import Modal from "../ui/Modal";
import { getFakeDisplayPatients } from '@/data/fake_display_patients';
import { DisplayPatient } from "@/types/patient";

const patients = getFakeDisplayPatients();

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
          patients={patients}
          onClick={(patient) => setSelectedPatient(patient)}
          onSort={() => {alert("Sort clicked")}}
          sortBy={null}
          sortDirection="asc"
        />
        {selectedPatient && (
            <Modal
                isOpen={true} 
                onClose={() => setSelectedPatient(null)}
                hasDeleteButton={true}
                onClickDelete={() => {alert("delete")}}
            >
                <PatientDetailModal 
                  patient={selectedPatient} 
                  onStatusClick={(id) => {alert(`Status clicked for patient ${id}`)}}
                />
            </Modal>
        )}
      </>
    );
  },
};