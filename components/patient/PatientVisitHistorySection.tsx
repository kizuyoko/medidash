import Heading from "../ui/Heading";
import type { Patient } from "../../types/patient";

type PatientProps = {
    patient: Patient
}

const PatientVisitHistorySection = ({ patient }: PatientProps) => {
    return (
        <section>
            <Heading level={3}>Visit History</Heading>
            <div className="card">
                <div>
                    <p className="card-label">Last Visit</p>
                    <p className="mb-4">{patient.lastVisit ?? '—'}</p>
                </div>
                <div>
                    <p className="card-label">Next Appointment</p>
                    <p className="mb-4">{patient.nextAppointment ?? '—'}</p>
                </div>
                <div>
                    <p className="card-label">Assigned Doctor</p>
                    <p>{patient.doctor}</p>
                </div>
            </div>
        </section>
    );
};

export default PatientVisitHistorySection;