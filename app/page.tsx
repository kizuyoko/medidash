"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { patients as rawPatients } from "@/data/fake_patients";
import PatientsTable from "@/components/patient/PatientsTable";
import type { DisplayPatient, PatientStatus } from "@/types/patient";
import Modal from "@/components/ui/Modal";
import PatientDetailModal from "@/components/patient/PatientDetailModal";
import usePatients from "@/hooks/usePatients";

export default function Home() {
  const [selectedPatient, setSelectedPatient] = useState<DisplayPatient | null>(null);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<PatientStatus | null>(null);
  const [sortBy, setSortBy] = useState<keyof DisplayPatient | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  const setSelectedPatientHandlar = (patient: DisplayPatient) => {
      setSelectedPatient(patient);
  }

  const { patients, totalPatients, filteredCount } = usePatients({
    rawPatients,
    searchText: debouncedSearchText,
    statusFilter,
    sortBy,
    sortDirection
   });

  const handleSort = (field: keyof DisplayPatient) => {
    if (sortBy === field) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  return (
    <section className="body">
      <Sidebar 
        patients={rawPatients}
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
          onSort={handleSort}
          patients={patients} 
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
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
