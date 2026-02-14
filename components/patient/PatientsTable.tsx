"use client";
import { useState } from "react";
import PatientsTableBody from "./PatientsTableBody";
import PatientsTableHead from "./PatientsTableHead";
import Modal from "../ui/Modal";
import type { Patient, Patients } from "../../types/patient";
import PatientDetailModal from "./PatientDetailModal";

const PatientsTable = ({ patients } : { patients: Patients }) => {
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const setSelectedPatientHandlar = (patient: Patient) => {
        setSelectedPatient(patient);
    }

    return (
        <>
            <table>
            <PatientsTableHead />
            <PatientsTableBody 
                patients={patients}
                onClick={setSelectedPatientHandlar} 
            />
            </table>
            {
                selectedPatient && (
                    <Modal
                        isOpen={true} 
                        onClose={() => setSelectedPatient(null)}
                    >
                        <PatientDetailModal patient={selectedPatient} />
                    </Modal>
                )
            }
        </>
    )
}

export default PatientsTable;