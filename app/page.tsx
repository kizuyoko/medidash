import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Header from "@/components/Header";

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
        <table><thead><tr><th>Patient ID</th><th>Name</th><th>Age</th><th>Status</th><th>Next Appointment</th><th>Condition</th></tr></thead><tbody><tr><td>PT-0001</td><td><b>Axe Gothart Wingate</b></td><td>84</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2027-02-06</td><td>Flu</td></tr><tr><td>PT-0002</td><td><b>Edie Ingram Wavell</b></td><td>95</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2026-12-21</td><td>Allergy</td></tr><tr><td>PT-0003</td><td><b>Francoise Devlen Lethebridge</b></td><td>98</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>2026-12-11</td><td>Heart Disease</td></tr><tr><td>PT-0004</td><td><b>Aaren Shane Frowd</b></td><td>17</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-done) text-(--color-text-status-done)">Done</span></td><td>2026-08-06</td><td>Flu</td></tr><tr><td>PT-0005</td><td><b>Elle Winny Josebury</b></td><td>12</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2026-07-01</td><td>Heart Disease</td></tr><tr><td>PT-0006</td><td><b>Carly Gill Grimmer</b></td><td>47</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-done) text-(--color-text-status-done)">Done</span></td><td>2026-04-16</td><td>Migraine</td></tr><tr><td>PT-0007</td><td><b>Kleon Gibby Getten</b></td><td>55</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>—</td><td>Anxiety</td></tr><tr><td>PT-0008</td><td><b>Sallie Avigdor Dennis</b></td><td>4</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2026-12-24</td><td>Arthritis</td></tr><tr><td>PT-0009</td><td><b>Adolph Lindon Dimbleby</b></td><td>113</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>2026-04-24</td><td>Asthma</td></tr><tr><td>PT-0010</td><td><b>Egan Culver Cauderlie</b></td><td>111</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-done) text-(--color-text-status-done)">Done</span></td><td>2026-05-01</td><td>Fracture</td></tr><tr><td>PT-0011</td><td><b>Theressa Jonah Buxcy</b></td><td>78</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>—</td><td>Flu</td></tr><tr><td>PT-0012</td><td><b>Damita Aldridge Lamort</b></td><td>33</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>2027-01-06</td><td>Migraine</td></tr><tr><td>PT-0013</td><td><b>Nathanial Brit Palffrey</b></td><td>71</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>—</td><td>Allergy</td></tr><tr><td>PT-0014</td><td><b>Mattheus Anatollo Oggers</b></td><td>37</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2026-06-02</td><td>Hypertension</td></tr><tr><td>PT-0015</td><td><b>Mufi Lanie Dood</b></td><td>71</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2026-12-09</td><td>Allergy</td></tr><tr><td>PT-0016</td><td><b>Meg Salvatore Caistor</b></td><td>22</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)">Waiting</span></td><td>2026-07-27</td><td>Hypertension</td></tr><tr><td>PT-0017</td><td><b>Josefa Ev Fattorini</b></td><td>88</td><td><span className="inline-flex px-3 py-1 text-sm font-medium rounded-full  bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)">In Consult</span></td><td>2026-11-09</td><td>Anxiety</td></tr></tbody></table></main></section>
  );
}
