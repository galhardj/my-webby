import type { CheckboxItem } from "@/src/type/prop";

const CheckboxItem = ({ id, label }: CheckboxItem) => {
  return (
    <div>
      <input type="checkbox" id={id} name={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxItem;
