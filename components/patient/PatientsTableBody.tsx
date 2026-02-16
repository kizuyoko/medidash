import PatientsTableRow from "./PatientsTableRow";
import type { DisplayPatient, DisplayPatients } from "../../types/patient";

type Props = {
  patients: DisplayPatients;
  onClick: (patient: DisplayPatient) => void;
};

const PatientTableBody = ({ patients, onClick }: Props) => {
    return (
        <tbody>
            {
              patients.map((patient) => (
                <PatientsTableRow 
                  key={patient.id} 
                  patient={patient} 
                  onClick={() => onClick(patient)}
                />
              ))
            }
        </tbody>
    );
};

export default PatientTableBody;