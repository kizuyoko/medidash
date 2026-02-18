import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import SidebarCard from "./ui/SidebarCard";
import type { Patients, PatientStatus } from "../types/patient";

type Props = {
    patients: Patients;
    setStatusFilter: (status: PatientStatus | null) => void;
}

const Sidebar = ({ patients, setStatusFilter }: Props) => {
    const totalPatients = patients.length;
    const watingPatients = patients.filter(p => p.status === 'waiting').length;
    const in_consultPatients = patients.filter(p => p.status === 'in_consult').length;
    const donePatients = patients.filter(p => p.status === 'done').length;

    return (
        <aside>
            <Heading level={1}>MediDash</Heading>
            <Paragraph>Patient Management System</Paragraph>
            <div className="overview">
                <SidebarCard 
                    label="Total Patients"
                    number={totalPatients}
                    onClick={() => setStatusFilter(null)}
                />
                <SidebarCard 
                    variant="waiting"
                    label="Waiting"
                    number={watingPatients}
                    onClick={() => setStatusFilter("waiting")}
                />
                <SidebarCard 
                    variant="in_consult"
                    label="In Consult"
                    number={in_consultPatients}
                    onClick={() => setStatusFilter("in_consult")}
                />
                <SidebarCard 
                    variant="done"
                    label="Done"
                    number={donePatients}
                    onClick={() => setStatusFilter("done")}
                />
            </div>
        </aside>
    )
}

export default Sidebar;