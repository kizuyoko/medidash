'use client';
import type { ReactNode } from "react";
import Button from "./Button";
import Heading from "./Heading";
import { useEffect, useRef  } from "react";
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
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      return;
    };

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e:KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "hidden";
      window.window.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen, onClose])
  
  if (!isOpen) return null;

  return (
    <div 
        ref={modalRef}
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
            aria-label="Close dialog"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )

}

export default Modal;