import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { patients } from "@/data/fake_patients";
import PatientsTable from "@/components/patient/PatientsTable";

export default function Home() {
  return (
    <section className="body">
      <Sidebar patients={patients} />
      <main>
        <Header />
        <PatientsTable  patients={patients} />
        <Footer /> 
      </main>
    </section>
  );
}
