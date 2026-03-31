import type { DisplayPatient } from "../../types/patient";
import Heading from "../ui/Heading";
import PatientBasicInfoSection from "./PatientBasicInfoSection";
import PatientContactInfoSection from "./PatientContactInfoSection";
import PatientMedicalInfoSection from "./PatientMedicalInfoSection";
import PatientVisitHistorySection from "./PatientVisitHistorySection";

type PatientProps = {
    patient: DisplayPatient;
    onStatusClick: (id: number) => void;
}

const PatientDetailModal = ({ patient, onStatusClick }: PatientProps) => {  

    return (
        <section className="patient-modal">
            <Heading id="patient-detail">
                {patient.fullName}  
                <span className="pl-3 text-sm font-normal">
                    {patient.patientId}
                </span>
            </Heading>
            <PatientBasicInfoSection 
                patient={patient} 
                onStatusClick={onStatusClick}
            />
            <PatientContactInfoSection patient={patient} />
            <PatientMedicalInfoSection patient={patient} />
            <PatientVisitHistorySection patient={patient} />           
        </section>
    );
};

export default PatientDetailModal;

