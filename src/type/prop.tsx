import { ReactNode } from "react";
export interface AccordionItemProp {
  id: number;
  summary: string;
  description: string;
  openItem: boolean;
  onItemClick: (id: number) => void;
}

export interface Input {
  id: string;
  type: string;
  children: ReactNode;
}
