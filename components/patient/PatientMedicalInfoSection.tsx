import Heading from "../ui/Heading";
import type { Patient } from "../../types/patient";

type PatientProps = {
    patient: Patient
}

const PatientMedicalInfoSection = ({ patient }: PatientProps) => {
    return (
        <section>
            <Heading level={3}>Medical Information</Heading>
            <div className="flex flex-col gap-4">
                <div className="card">
                    <p className="card-label">Primary Condition</p>
                    <p className="card-text">{patient.condition}</p>
                </div>
                <div className="card">
                    <p className="card-label">Allergies</p>
                    <p className="card-text">{patient.allergies ?? '—'}</p>
                </div>
                <div className="card">
                    <p className="card-label">Primary Medications</p>
                    <p className="card-text">{patient.medications ?? '—'}</p>
                </div>
            </div>
        </section>
    );
};

export default PatientMedicalInfoSection;