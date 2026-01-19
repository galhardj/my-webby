import CheckboxItem from "./CheckboxItem";
import type { Checkbox } from "@/src/type/prop";

const Checkbox = ({ legend, checkboxes }: Checkbox) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {checkboxes.map((checkbox, index) => (
        <CheckboxItem
          id={checkbox.replace(/\s+/g, "-").toLowerCase()}
          label={checkbox}
          key={index}
        />
      ))}
    </fieldset>
  );
};

export default Checkbox;
