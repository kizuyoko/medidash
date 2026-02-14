import type { Patient } from "../../types/patient";
import { generatePatientId, generateFullname } from '../../utilities/data';
import Heading from "../ui/Heading";
import PatientBasicInfoSection from "./PatientBasicInfoSection";
import PatientContactInfoSection from "./PatientContactInfoSection";
import PatientMedicalInfoSection from "./PatientMedicalInfoSection";
import PatientVisitHistorySection from "./PatientVisitHistorySection";

type PatientProps = {
    patient: Patient
}

const PatientDetailModal = ({ patient }: PatientProps) => {
    const patientId = generatePatientId(patient.id);
    const fullName = generateFullname(patient.first_name, patient.last_name, patient.middle_name);    

    return (
        <section className="patient-modal">
            <Heading>
                {fullName}  
                <span className="pl-3 text-sm font-normal">
                    {patientId}
                </span>
            </Heading>
            <PatientBasicInfoSection patient={patient} />
            <PatientContactInfoSection patient={patient} />
            <PatientMedicalInfoSection patient={patient} />
            <PatientVisitHistorySection patient={patient} />           
        </section>
    );
};

export default PatientDetailModal;

