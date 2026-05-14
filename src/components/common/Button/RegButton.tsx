import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils/mergeTailwind";
import { regButtonVariants } from "./styles";

type RegButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: VariantProps<typeof regButtonVariants>["color"];
};

const RegButton = React.forwardRef<HTMLButtonElement, RegButtonProps>(
  ({ type = "button", className, color, children, ...props }, ref) => {
    const style = cn(regButtonVariants({ color }), className);
    return (
      <button ref={ref} className={style} type={type} {...props}>
        {children}
      </button>
    );
  },
);

export default RegButton;
