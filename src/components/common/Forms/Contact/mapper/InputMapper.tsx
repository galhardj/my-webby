import Input from "../../Input";
import Select from "../../Select";
import Checkbox from "../../Checkbox";
import Textarea from "../../Textarea";
import { formContainer } from "@/src/type/prop";

const InputMapper = ({ inputs }: Pick<formContainer, "inputs">) => {
  return inputs.map((input, index) => {
    switch (input.fieldType) {
      case "input":
        return (
          <Input
            id={input.id}
            type={input.type}
            label={input.label}
            key={index}
          />
        );
      case "select":
        return (
          <Select
            id={input.id}
            label={input.label}
            options={input.options}
            key={index}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            legend={input.legend}
            checkboxes={input.checkboxes}
            key={index}
          />
        );
      case "textarea":
        return (
          <Textarea
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}
            key={index}
          />
        );
    }
  });
};

export default InputMapper;
