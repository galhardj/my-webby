import type { Textarea } from "@/src/type/prop";
import Container from "./Container/Container";

const Textarea = ({ id, label, placeholder }: Textarea) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={id} placeholder={placeholder} />
    </Container>
  );
};

export default Textarea;
