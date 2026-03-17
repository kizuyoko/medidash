import StatusBadge from "../ui/StatusBadge";
import type { DisplayPatient } from "../../types/patient";

type Props = {
  patient: DisplayPatient;
  onClick: () => void;
};

const PatientsTableRow = ({ patient, onClick }: Props) => {
    return (
        <>
            <tr onClick={onClick}>
                <td><span>ID: </span>{patient.patientId}</td>
                <td><span>Name: </span><b>{patient.fullName}</b></td>
                <td><span>Age: </span>{patient.age}</td>
                <td>
                    <span>Status: </span><StatusBadge status={patient.status} />
                </td>
                <td>
                    <span>Appointment: </span> {!patient.nextAppointment ? "—" : patient.nextAppointment}
                </td>
                <td><span>Condition: </span>{patient.condition}</td>
            </tr>
        </>
    );
};

export default PatientsTableRow;
