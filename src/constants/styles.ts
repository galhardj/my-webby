import { StringNested, StringToString } from "@/src/type/common";

export const BUTTON_STYLE: StringNested = {
  commonButton: {
    yellow: "bg-amber-300",
    yellowDark: "bg-amber-400",
    blue: "bg-blue-200",
  },
  icon: {
    resetButton:
      "flex h-9 w-9 items-center justify-center rounded-full bg-red-100 p-1 transition-colors hover:bg-red-200",
  },
};

export const BLOCK_WIDTH: StringToString = {
  wide: "max-w-7xl xl:w-5xl",
  center: "w-sm",
};
