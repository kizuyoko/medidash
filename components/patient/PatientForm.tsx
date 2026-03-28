import { useState } from "react";
import Button from "../ui/Button";
import InputForm from "../ui/InputForm";
import { NewPatient, PatientStatus } from "@/types/patient";

type Props = {
  createPatient: (data: NewPatient) => void;
  setIsOpen: (open: boolean) => void;
}

const PatientForm = ({ createPatient, setIsOpen }: Props) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    status: "waiting",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));    
  };

  const isFormValid = () => Object.values(form).every((v) => v.trim() !== "");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPatient: NewPatient = {
      firstName: form.firstName,
      lastName: form.lastName,
      status: form.status as PatientStatus,
    };

    createPatient(newPatient)

    setForm({
      firstName: "",
      lastName: "",
      status: "onwaiting",
    });
    setIsOpen(false);
  };


  return (
    <form 
      className="flex flex-col"
      onSubmit={handleSubmit}
    > 
      <InputForm 
        id="firstName"
        label="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      <InputForm 
        id="lastName"
        label="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />
      <InputForm
        type="select"
        id="status"
        label="Status"
        value={form.status}
        onChange={handleChange}
      />
      <Button
        variant="secondary"
        type="submit"
        disabled={!isFormValid()}
      >Save</Button>
    </form>
  );
};

export default PatientForm;