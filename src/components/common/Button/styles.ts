import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = (baseStyle: string) =>
  cva(baseStyle, {
    variants: {
      color: {
        yellow: "bg-amber-300",
        yellowDark: "bg-amber-400",
        blue: "bg-blue-200",
        gray: "bg-gray-600",
      },
    },
    defaultVariants: {
      color: "yellow",
    },
  });

const _buttonVariants = buttonVariants("");
export type buttonColors = VariantProps<typeof _buttonVariants>["color"];

export const regButtonVariants = buttonVariants(
  "mt-3 rounded-xl border px-6 py-3 font-medium text-gray-600",
);

export const linkButtonVariants = buttonVariants(
  "text-sm rounded-xl px-7 py-2 font-medium text-gray-200 md:text-base md:py-3 md:mt-3",
);

export const iconVariants = cva("", {
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
