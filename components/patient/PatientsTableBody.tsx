import PatientsTableRow from "./PatientsTableRow";
import type { Patient, Patients } from "../../types/patient";

type Props = {
  patients: Patients;
  onClick: (patient: Patient) => void;
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