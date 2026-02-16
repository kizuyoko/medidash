"use client";
import PatientsTableBody from "./PatientsTableBody";
import PatientsTableHead from "./PatientsTableHead";
import type { DisplayPatient, DisplayPatients } from "../../types/patient";

type Props = {
    patients: DisplayPatients;
    onClick: (patient: DisplayPatient) => void;
}

const PatientsTable = ({ patients, onClick } : Props) => {
    return (
        <>
            <table>
            <PatientsTableHead />
            <PatientsTableBody 
                patients={patients}
                onClick={onClick}
            />
            </table>
        </>
    )
}

export default PatientsTable;