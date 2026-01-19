import type { Input } from "@/src/type/prop";
import Container from "./Container";

const Input = ({ id, type, label }: Input) => {
  const InputCommon = () => (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </Container>
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
