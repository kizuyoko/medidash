import { useState } from "react";
import Button from "../ui/Button";
import InputForm from "../ui/InputForm";

const PatientForm = () => {
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

  return (
    <form 
      className="flex flex-col"
    > 
      <InputForm 
        id="firstName"
        name="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      <InputForm 
        id="lastName"
        name="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />
      <InputForm
        type="select"
        id="status"
        name="Status"
        value={form.status}
        onChange={handleChange}
      />
      <Button
        variant="secondary"
        disabled
      >Save</Button>
    </form>
  );
};

export default PatientForm;