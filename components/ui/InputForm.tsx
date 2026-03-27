type Props = {
  id: string;
  name: string;
  type?: "text" | "select" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
};

const InputForm = ({ id, name, type="text", value, onChange }:Props) => {
  return (
    <div className="flex flex-col mb-1">
      <label
        htmlFor={id}
      >First name</label>
      {type === "text" && (
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="input-form"
          placeholder={name}
        />
      )}

      {type === "textarea" && (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="input-form"
          placeholder={name}
        />
      )}

      {type === "select" && (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="input-form"
        >
          <option value="waiting">Waiting</option>
          <option value="in_consult">In consult</option>
          <option value="done">Done</option>
        </select>
      )}
    </div>
  );
};

export default InputForm;