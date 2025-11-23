import Container from "./Container/Container";
import type { Select } from "@/src/type/prop";

const Select = ({ id, label, options }: Select) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id}>
        <option value="">{options[0]}</option>
        {options.slice(1).map((option, index) => (
          <option value={option.toLocaleLowerCase()} key={index}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
