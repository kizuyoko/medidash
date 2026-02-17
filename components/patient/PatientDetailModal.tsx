import type { DisplayPatient } from "../../types/patient";
import Heading from "../ui/Heading";
import PatientBasicInfoSection from "./PatientBasicInfoSection";
import PatientContactInfoSection from "./PatientContactInfoSection";
import PatientMedicalInfoSection from "./PatientMedicalInfoSection";
import PatientVisitHistorySection from "./PatientVisitHistorySection";

type PatientProps = {
    patient: DisplayPatient
}

const PatientDetailModal = ({ patient }: PatientProps) => {  

    return (
        <section className="patient-modal">
            <Heading>
                {patient.fullName}  
                <span className="pl-3 text-sm font-normal">
                    {patient.patientId}
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

