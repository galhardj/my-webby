import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils/mergeTailwind";

const iconVariants = cva("", {
  variants: {
    category: {
      resetButton:
        "flex h-9 w-9 items-center justify-center rounded-full bg-red-100 p-1 transition-colors hover:bg-red-200",
      chevronLeft:
        "absolute top-1/2 left-0.5 rounded-full bg-gray-200/50 p-3 hover:scale-110",
      chevronRight:
        "absolute top-1/2 right-0.5 rounded-full bg-gray-200/50 p-3 hover:scale-110",
      password:
        "absolute top-1/2 right-3 flex h-5 w-5 -translate-y-1/2 items-center justify-center bg-transparent",
    },
  },
});

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  category: VariantProps<typeof iconVariants>["category"];
};

const IconButton = ({
  type = "button",
  className,
  category,
  children,
  ...props
}: IconButtonProps) => {
  const style = cn(iconVariants({ category }), className);
  return (
    <button className={style} type={type} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
