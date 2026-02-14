import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="body">
      <aside>
        <Heading level={1}>PatientDash</Heading>
        <Paragraph>Patient Management System</Paragraph>
        <div className="overview">
          <div className="card ">
            <div className="card-label" >Total Patients</div>
            <div className="card-strong">17</div>
          </div>
          <div className="card ">
            <div className="card-label">Waiting</div>
            <div className="card-strong" >6</div>
          </div>
          <div className="card">
            <div className="card-label">In Consult</div>
            <div className="card-strong">8</div>
          </div>
          <div className="card">
            <div className="card-label">Done</div>
            <div className="card-strong" >3</div>
          </div>
        </div>
      </aside>
      <main>
        <Header />
        <table>
          <thead>
            <tr><th>Patient ID</th><th>Name</th><th>Age</th><th>Status</th><th>Next Appointment</th><th>Condition</th></tr>
          </thead>
          <tbody>
            <tr><td>PT-0001</td><td><b>Axe Gothart Wingate</b></td><td>84</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2027-02-06</td><td>Flu</td></tr>
            
            <tr>
              <td>PT-0003</td><td><b>Francoise Devlen Lethebridge</b></td><td>98</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>2026-12-11</td><td>Heart Disease</td></tr>
              
           </tbody></table>
        <Footer />
        
        
        </main></section>
  );
}
