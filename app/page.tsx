"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { patients as rawPatients } from "@/data/fake_patients";
import PatientsTable from "@/components/patient/PatientsTable";
import type { DisplayPatient } from "@/types/patient";
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from "@/utilities/data";
import Modal from "@/components/ui/Modal";
import PatientDetailModal from "@/components/patient/PatientDetailModal";

export default function Home() {
  const [selectedPatient, setSelectedPatient] = useState<DisplayPatient | null>(null);

  const setSelectedPatientHandlar = (patient: DisplayPatient) => {
      setSelectedPatient(patient);
  }

  const displayPatients:  DisplayPatient[] = useMemo(() => {
    return [...rawPatients].map((patient) => ({
      ...patient, 
      patientId: generatePatientId(patient.id),
      fullName: generateFullname(patient.first_name, patient.last_name, patient.middle_name),
      age: calculateAge(patient.birthday),
      ageText: generateAgeText(patient.birthday),
    })); 
  }, [])

  return (
    <section className="body">
      <Sidebar patients={displayPatients} />
      <main>
        <Header />
        <PatientsTable  
          onClick={setSelectedPatientHandlar}
          patients={displayPatients} />
        {
                selectedPatient && (
                    <Modal
                        isOpen={true} 
                        onClose={() => setSelectedPatient(null)}
                    >
                        <PatientDetailModal patient={selectedPatient} />
                    </Modal>
                )
            }
        <Footer /> 
      </main>
    </section>
  );
}
