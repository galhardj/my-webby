import Input from "./Input";
import type { InputWithLabelProps } from "@/src/type/forms";
import { forwardRef } from "react";

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, id, children, iconEmbeded = false, ...props }, ref) => {
    const renderInput = () => <Input ref={ref} id={id} {...props} />;

    const renderInputWithIcon = () => (
      <div className="relative">
        {renderInput()}
        {children}
      </div>
    );

    return (
      <div>
        <label htmlFor={id} className="mb-2 block">
          {label}
        </label>
        {iconEmbeded ? renderInputWithIcon() : renderInput()}
      </div>
    );
  },
);

InputWithLabel.displayName = "InputWithLabel";

export default InputWithLabel;
