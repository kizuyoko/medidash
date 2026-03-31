"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
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
import Heading from "@/components/ui/Heading";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<PatientStatus | null>(null);
  const [sortBy, setSortBy] = useState<keyof DisplayPatient | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);
 
  //const queryClient = useQueryClient();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  const setSelectedPatientHandlar = (patient: DisplayPatient) => {
      setSelectedPatientId(patient.id);
  }

  const { patients, totalPatients, filteredCount, alertsList, statusStats, loading, error, createPatient, updatePatientStatus, deletePatient } = usePatients({
    searchText: debouncedSearchText,
    statusFilter,
    sortBy,
    sortDirection,
   });

  const selectedPatient = patients.find(
    (p) => p.id === selectedPatientId
  );

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
        patients={patients}
        setStatusFilter={setStatusFilter}
      />
      <main>
        {/* Refetch 
        <Button
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ["patients"]});
          }}
          className="float-right"
        >Refetch!</Button>
       */}
        <Header 
          searchText={searchText}
          statusFilter={statusFilter}
          onSearchChange={setSearchText}
          totalPatients={totalPatients}
          filteredPatients={filteredCount}
          createPatient={createPatient}
        />
        { alertsList.some(alert => alert.count > 0) && (
            <AlertsList alerts={alertsList} />
        )}
        { Object.values(statusStats.statusStats).some(v => v > 0) && (
            <StatsPanel stats={statusStats} />
        )}
        { pagionatedPatients.length === 0 ? (
          <Heading level={3} className="text-center p-4">
            No patients found.
          </Heading>
        ) : (
          <PatientsTable
            onClick={setSelectedPatientHandlar}
            onSort={handleSort}
            patients={pagionatedPatients}
            sortBy={sortBy}
            sortDirection={sortDirection}
          />
        )}
        { selectedPatient && (
            <Modal
              isOpen={true} 
              onClose={() => setSelectedPatientId(null)}
              hasDeleteButton={true}
              onClickDelete={() => deletePatient(selectedPatient.id)}
            >
              <PatientDetailModal 
                patient={selectedPatient} 
                onStatusClick={updatePatientStatus}
              />
            </Modal>
        )}
        { totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />  
        )}
        <Footer /> 
      </main>
    </section>
  );
}
