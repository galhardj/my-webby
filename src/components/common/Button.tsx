import React from "react";
import { cn } from "@/src/lib/utils/mergeTailwind";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-lg border-2 bg-white/50 px-6 py-3 font-medium text-white",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
