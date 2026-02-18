"use client";
import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { patients as rawPatients } from "@/data/fake_patients";
import PatientsTable from "@/components/patient/PatientsTable";
import type { DisplayPatient, DisplayPatients, PatientStatus } from "@/types/patient";
import { generatePatientId, generateFullname, calculateAge, generateAgeText } from "@/utilities/data";
import Modal from "@/components/ui/Modal";
import PatientDetailModal from "@/components/patient/PatientDetailModal";

export default function Home() {
  const [selectedPatient, setSelectedPatient] = useState<DisplayPatient | null>(null);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<PatientStatus | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  const setSelectedPatientHandlar = (patient: DisplayPatient) => {
      setSelectedPatient(patient);
  }

  const displayPatients:  DisplayPatients = useMemo(() => {
    return [...rawPatients].map((patient) => ({
      ...patient, 
      middle_name: patient.middle_name ?? "",
      nextAppointment: patient.nextAppointment ?? "",
      medications: patient.medications ?? "",

      patientId: generatePatientId(patient.id),
      fullName: generateFullname(patient.first_name, patient.last_name, patient.middle_name ?? ""),
      age: calculateAge(patient.birthday),
      ageText: generateAgeText(patient.birthday),
    })); 
  }, [])

  const filteredPatients: DisplayPatients = useMemo(() => {
    const keyword = debouncedSearchText.trim().toLowerCase();

    return displayPatients
      .filter(p => !keyword || p.fullName.toLowerCase().includes(keyword))
      .filter(p => !statusFilter || p.status === statusFilter);
  }, [displayPatients, debouncedSearchText, statusFilter]);


  const totalPatients = rawPatients.length;
  const filteredCount = filteredPatients.length;


  return (
    <section className="body">
      <Sidebar 
        patients={displayPatients}
        setStatusFilter={setStatusFilter}
      />
      <main>
        <Header 
          searchText={searchText}
          statusFilter={statusFilter}
          onSearchChange={setSearchText}
          totalPatients={totalPatients}
          filteredPatients={filteredCount}
        />
        <PatientsTable  
          onClick={setSelectedPatientHandlar}
          patients={filteredPatients} />
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
