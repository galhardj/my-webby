import Container from "../Container/Container";
import InputMapper from "./InputMapper";
import { Form } from "@/src/type/forms";
import { gridColumn } from "@/src/constants/form";

const ContainerMapper = ({ containers }: Pick<Form, "containers">) => {
  return containers.map((container, index) => (
    <Container column={gridColumn[container.column]} key={index}>
      <InputMapper inputs={container.inputs} />
    </Container>
  ));
};

export default ContainerMapper;
