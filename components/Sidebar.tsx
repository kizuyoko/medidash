import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import SidebarCard from "./ui/SidebarCard";
import type { Patients } from "../types/patient";

const Sidebar = ({ patients } : { patients: Patients })=> {
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
                />
                <SidebarCard 
                    variant="waiting"
                    label="Waiting"
                    number={watingPatients}
                />
                <SidebarCard 
                    variant="in_consult"
                    label="In Consult"
                    number={in_consultPatients}
                />
                <SidebarCard 
                    variant="done"
                    label="Done"
                    number={donePatients}
                />
            </div>
        </aside>
    )
}

export default Sidebar;