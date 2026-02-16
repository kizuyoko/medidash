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
                <td>{patient.patientId}</td>
                <td><b>{patient.fullName}</b></td>
                <td>{patient.age}</td>
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
