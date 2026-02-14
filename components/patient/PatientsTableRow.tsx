"use client";
import StatusBadge from "../ui/StatusBadge";
import type { Patient } from "../../types/patient";
import { generatePatientId, generateFullname, calculateAge } from '../../utilities/data';

import { useState } from "react";



const PatientsTableRow = ({ patient }: { patient: Patient }) => {
    const [open, setOpen] = useState(false);

    const patientId = generatePatientId(patient.id);
    const fullName = generateFullname(patient.first_name, patient.last_name, patient.middle_name);
    const age = calculateAge(patient.birthday);

    const openPatientModal = () => {
        setOpen(true);
    };

    return (
        <>
            <tr onClick={openPatientModal}>
                <td>{patientId}</td>
                <td><b>{fullName}</b></td>
                <td>{age}</td>
                <td>
                    <StatusBadge status={patient.status} />
                </td>
                <td>
                    {!patient.nextAppointment ? "—" : patient.nextAppointment}
                </td>
                <td>{patient.condition}</td>
            </tr>

        </>
    );
};

export default PatientsTableRow;
