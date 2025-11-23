import Input from "../Input";
import type { Checkbox } from "@/src/type/prop";

const Checkbox = ({ legend, checkboxes }: Checkbox) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {checkboxes.map((checkbox, index) => (
        <Input
          id={checkbox.replace(/\s+/g, "-").toLowerCase()}
          type="checkbox"
          label={checkbox}
          key={index}
        />
      ))}
    </fieldset>
  );
};

export default Checkbox;
