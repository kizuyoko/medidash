"use client";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import SearchBar from "./SearchBar";
import { useState } from "react";

type Props = {
  searchText: string;
  onSearchChange: (value: string) => void;
}

const Header = ({ searchText, onSearchChange }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <header>
          <div className="flex justify-between items-end">
            <div>
              <Heading>Patient List</Heading>
              <Paragraph>Overview of all registered patients</Paragraph>
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