import type { Input } from "@/src/type/prop";

const Input = ({ id, type, label }: Input) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>
      <input type={type} id={id} name={id} />
    </div>
  );
};

export default Input;
