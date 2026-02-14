import PatientsTableRow from "./PatientsTableRow";
import type { Patients } from "../../types/patient";

const PatientTableBody = ({ patients } : { patients: Patients }) => {
    return (
        <tbody>
            {
              patients.map((patient) => (
                <PatientsTableRow 
                  key={patient.id} 
                  patient={patient} 
                />
              ))
            }
        </tbody>
    );
};

export default PatientTableBody;