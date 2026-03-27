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
      <select
        className="input-form"
      >
        <option value="waiting">Waiting</option>
        <option value="in_consult">In consult</option>
      </select>
      <Button
        variant="secondary"
        disabled
      >Save</Button>
    </form>
  );
};

export default PatientForm;