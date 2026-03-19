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
import AlertsList from "@/components/alerts/AlertsList";
import StatsPanel from "@/components/stats/StatsPanel";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Pagination from "@/components/ui/Pagination";

export default function Home() {
  const [selectedPatient, setSelectedPatient] = useState<DisplayPatient | null>(null);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<PatientStatus | null>(null);
  const [sortBy, setSortBy] = useState<keyof DisplayPatient | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  const setSelectedPatientHandlar = (patient: DisplayPatient) => {
      setSelectedPatient(patient);
  }

  const { patients, totalPatients, filteredCount, alertsList, statusStats, loading, error } = usePatients({
    rawPatients,
    searchText: debouncedSearchText,
    statusFilter,
    sortBy,
    sortDirection,
   });

  /* Pagenation */
  const pageSize = 10;

  const pagionatedPatients = patients.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  ); 

  const totalPages = Math.ceil(patients.length / pageSize);

  if (loading) return <Loading />;
  if (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <ErrorMessage message={message} />;
  }

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
        <AlertsList alerts={alertsList} />
        <StatsPanel stats={statusStats } />
        <PatientsTable  
          onClick={setSelectedPatientHandlar}
          onSort={handleSort}
          patients={pagionatedPatients} 
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />  
        <Footer /> 
      </main>
    </section>
  );
}
