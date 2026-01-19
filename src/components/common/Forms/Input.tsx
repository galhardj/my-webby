import type { Input } from "@/src/type/forms";

const Input = ({ id, type, label }: Input) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full rounded-sm border-2 px-2 py-2.5"
      />
    </div>
  );
};

export default Input;
