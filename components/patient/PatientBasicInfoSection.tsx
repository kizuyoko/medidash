import Heading from "../ui/Heading";
import StatusBadge from "../ui/StatusBadge";
import type { Patient } from "../../types/patient";
import { calculateAge } from "../../utilities/data";

type PatientProps = {
    patient: Patient
}

const PatientBasicInfoSection = ({ patient }: PatientProps) => {
    const age = calculateAge(patient.birthday);
    const ageText = age === 0 
        ? 'Less than 1 year' 
        : `${age} year${age === 1 ? '' : 's'}`;

    return (
        <section>
            <Heading level={3}>Basic Information</Heading>
            <div className="basic-info-wrap">
                <div className="card">
                    <p className="card-label">Age</p>
                    <p className="card-semibold">{ageText}</p>
                </div>
                <div className="card">
                    <p className="card-label">Gender</p>
                    <p className="card-semibold">
                        <span className="capitalize">{patient.gender}</span>
                    </p>
                </div>
                <div className="card">
                    <p className="card-label">Blood Type</p>
                    <p className="card-semibold">{patient.bloodType}</p>
                </div>
                <div className="card">
                    <p className="card-label">Status</p>
                    <StatusBadge status={patient.status} />
                </div>
            </div>
        </section>
    );
};

export default PatientBasicInfoSection;