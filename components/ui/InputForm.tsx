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
      >{name}</label>
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
        <div className="relative w-full">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="input-form appearance-none pr-10 w-full"
          >
            <option value="waiting">Waiting</option>
            <option value="in_consult">In consult</option>
            <option value="done">Done</option>
            
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            ▼
          </span>
        </div>  
      )}
    </div>
  );
};

export default InputForm;