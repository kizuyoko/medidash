import { useState } from "react";
import Button from "../ui/Button";
import InputForm from "../ui/InputForm";

type NewPatient =  {
  firstName: string;
  lastName: string;
  status: string;
  id: string;
}

const PatientForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [patiens, setPatients] = useState<NewPatient[]>([]);
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

    const newPatient:NewPatient = {
      id: crypto.randomUUID(),
      ...form,
    };

    setPatients((prev) => [newPatient, ...prev]);

    setForm({
      firstName: "",
      lastName: "",
      status: "waiting",
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