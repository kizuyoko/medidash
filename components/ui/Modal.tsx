'use client';
import type { ReactNode } from "react";
import Button from "./Button";
import Heading from "./Heading";
import { useEffect } from "react";
import '@/app/globals.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const Modal = ({
  isOpen, onClose, title, children
}: ModalProps) => {

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e:KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.window.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen, onClose])
  
  if (!isOpen) return null;

  return (
    <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="patient-detail"
        className="modal-root"
    >
      {/* overlay */}
      <div
        className="modal-overlay"
        onClick={onClose}
      />

      {/* modal box */}
      <div className="modal-box">
        {title && (
          <Heading>{title}</Heading>
        )}

        <div className="overflow-y-auto pb-4 pr-4">
          {children}
        </div>
        
        <div className="flex justify-end">
          <Button
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )

}

export default Modal;