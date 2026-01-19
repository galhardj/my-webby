import React from "react";
import { cn } from "@/src/lib/utils/mergeTailwind";
import { ButtonProps } from "@/src/type/props";
import { BUTTON_STYLE } from "@/src/constants/styles";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      style = "commonButton",
      styleType = "yellow",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          "mt-3 rounded-xl border px-6 py-3 font-medium text-gray-600",
          BUTTON_STYLE[style][styleType],
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
