import type { Input } from "@/src/type/prop";

const Input = ({ id, type, label }: Input) => {
  const InputCommon = () => (
    <div>
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>
      <input type={type} id={id} name={id} />
    </div>
  );

  const InputCheckbox = () => (
    <div>
      <input type={type} id={id} name={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );

  return type === "checkbox" ? <InputCheckbox /> : <InputCommon />;
};

export default Input;
