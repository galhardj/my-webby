import type { Input } from "@/src/type/prop";
import Container from "../Container/Container";

const Input = ({ id, type, label, children }: Input) => {
  const InputCommon = () => (
    <Container>
      <label htmlFor={id}>{label || children}</label>
      <input type={type} id={id} name={id} />
    </Container>
  );

  const InputCheckbox = () => (
    <div>
      <input type={type} id={id} name={id} />
      <label htmlFor={id}>{label || children}</label>
    </div>
  );

  return type === "checkbox" ? <InputCheckbox /> : <InputCommon />;
};

export default Input;
