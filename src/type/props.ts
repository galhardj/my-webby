export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  style?: "commonButton" | "icon";
  styleType?: "yellow" | "yellowDark" | "blue" | "resetButton";
};
