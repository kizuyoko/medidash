import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/ui/StatusBadge";
import SidebarCard from "@/components/ui/SidebarCard";

export default function Home() {
  return (
    <section className="body">
      <aside>
        <Heading level={1}>PatientDash</Heading>
        <Paragraph>Patient Management System</Paragraph>
        <div className="overview">
          <SidebarCard 
              label="Total Patients"
              number={111}
          />
          <SidebarCard 
              variant="waiting"
              label="Waiting"
              number={222}
          />
          <SidebarCard 
              variant="in_consult"
              label="In Consult"
              number={333}
          />
          <SidebarCard 
              variant="done"
              label="Done"
              number={444}
          />
        </div>
      </aside>
      <main>
        <Header />
        <table>
          <thead>
            <tr><th>Patient ID</th><th>Name</th><th>Age</th><th>Status</th><th>Next Appointment</th><th>Condition</th></tr>
          </thead>
          <tbody>
            <tr><td>PT-0001</td><td><b>Axe Gothart Wingate</b></td><td>84</td><td>
              <StatusBadge
                status="in_consult"
              />
            </td><td>2027-02-06</td><td>Flu</td></tr>
            
            <tr>
              <td>PT-0003</td><td><b>Francoise Devlen Lethebridge</b></td><td>98</td><td><StatusBadge
                status="done"
              /></td><td>2026-12-11</td><td>Heart Disease</td></tr>
              
           </tbody></table>
        <Footer />
        
        
        </main></section>
  );
}
