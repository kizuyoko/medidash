import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/ui/StatusBadge";
import SidebarCard from "@/components/ui/SidebarCard";
import Sidebar from "@/components/Sidebar";
import { patients } from "@/data/fake_patients";

export default function Home() {
  return (
    <section className="body">
      <Sidebar patients={patients} />
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
