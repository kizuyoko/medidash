import StatusBadge from "../ui/StatusBadge";
import type { DisplayPatient } from "../../types/patient";

type Props = {
  patient: DisplayPatient;
  onClick: () => void;
};

const PatientsTableRow = ({ patient, onClick }: Props) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <>
            <tr 
                tabIndex={0}
                onClick={onClick} 
                onKeyDown={handleKeyDown} 
                role="row"
            >
                <td aria-label="Patient ID">
                    <span>ID: </span>{patient.patientId}
                </td>
                <td aria-label="Name">
                    <span>Name: </span><b>{patient.fullName}</b>
                </td>
                <td aria-label="Age" className="lg:text-right">
                    <span>Age: </span>{patient.age}
                </td>
                <td  aria-label="Status" className="lg:text-center">
                    <span>Status: </span><StatusBadge status={patient.status} />
                </td>
                <td aria-label="Appointment" className="lg:text-right">
                    <span>Appointment: </span> {!patient.nextAppointment ? "—" : patient.nextAppointment}
                </td>
                <td aria-label="Condition">
                    <span>Condition: </span>{patient.condition}
                </td>
            </tr>
        </>
    );
};

export default PatientsTableRow;
