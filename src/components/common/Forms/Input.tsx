import type { InputProps } from "@/src/type/forms";
import { forwardRef } from "react";
import { cn } from "@/src/lib/utils/mergeTailwind";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, children, className, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="mb-2 block">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          name={id}
          {...props}
          className={cn("w-full rounded-sm border-2 px-2 py-2.5", className)}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
