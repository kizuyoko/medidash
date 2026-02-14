"use client";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
          <div className="flex justify-between items-end">
            <div>
              <Heading>Patient List</Heading>
              <Paragraph>Overview of all registered patients</Paragraph>
            </div>
            <Button onClick={() => setOpen(true)}>New</Button>
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