"use client";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import SearchBar from "./SearchBar";
import { useState } from "react";
import type { PatientStatus } from "@/types/patient";

type Props = {
  searchText: string;
  statusFilter: PatientStatus | null;
  onSearchChange: (value: string) => void;
  totalPatients: number;
  filteredPatients?: number;
}

const Header = ({ searchText, statusFilter, onSearchChange, totalPatients, filteredPatients }: Props) => {
    const [open, setOpen] = useState(false);
    const statusLabels: Record<PatientStatus, string> = {
        waiting: 'Waiting',
        in_consult: 'In Consultation',
        done: 'Done',
        cancelled: 'Cancelled',
    };

    return (
        <header>
          <div className="flex justify-between items-end">
            <div>
              <Heading>Patient List</Heading>
              <Paragraph>
                {searchText && statusFilter ? (
                    <>
                    <strong>{statusLabels[statusFilter]}</strong> patients matching{" "}
                    <strong>{searchText}</strong> ({filteredPatients}/{totalPatients})
                    </>
                ) : searchText ? (
                    <>
                    Search results (<strong>{searchText}</strong>, {filteredPatients}/{totalPatients})
                    </>
                ) : statusFilter ? (
                    <>
                    <strong>{statusLabels[statusFilter]}</strong> patients ({filteredPatients}/{totalPatients})
                    </>
                ) : (
                    <>Overview of all registered patients ({totalPatients})</>
                )}
                </Paragraph>
            </div>
            <div className="flex items-center space-x-4">
                <SearchBar 
                    value={searchText}
                    onChange={onSearchChange}
                />
                <Button onClick={() => setOpen(true)}>New</Button>
            </div>
          </div>
          <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Patient Info"
            >
                <p>Coming Soon...</p>
            </Modal>
        </header>  
    )
}

export default Header;