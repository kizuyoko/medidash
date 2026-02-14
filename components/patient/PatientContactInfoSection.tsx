import Heading from "../ui/Heading";
import type { Patient } from "../../types/patient";

type PatientProps = {
    patient: Patient
}

const PatientContactInfoSection = ({ patient }: PatientProps) => {
    return (
        <section>
            <Heading level={3}>Contact Information</Heading>
            <div className="card">
                <div>
                    <p className="card-label">Phone</p>
                    <p className="mb-4">{patient.phone}</p>
                </div>
                <div>
                    <p className="card-label">Email</p>
                    <p className="mb-4">{patient.email}</p>
                </div>
                <div>
                    <p className="card-label">Address</p>
                    <p>{patient.address}</p>
                </div>
            </div>
        </section>
    );
};

export default PatientContactInfoSection;