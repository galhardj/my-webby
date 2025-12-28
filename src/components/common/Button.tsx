import { cn } from "@/src/lib/utils/mergeTailwind";
import React from "react";

interface Button {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, Button>(
  ({ children, className, onClick }, ref) => {
    return (
      <button
        className={cn(
          "rounded-lg border-2 bg-indigo-600 px-6 py-3 font-medium text-white focus:border-4 focus:border-red-500",
          className,
        )}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

export default Button;
