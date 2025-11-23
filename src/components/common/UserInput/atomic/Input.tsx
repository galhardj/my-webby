import type { Input } from "@/src/type/prop";
import Container from "./Container/Container";

const Input = ({ id, type, children}: Input) => {
  return (
    <Container>
      <label htmlFor={id}>{children}</label>
      <input type={type} id={id} name={id} />
    </Container>
  );
};

export default Input;
