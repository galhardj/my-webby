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
  type: "checkbox" | "text" | "number" | "tel";
  label: string;
}

export interface Select {
  id: string;
  label: string;
  options: string[];
}

export interface Checkbox {
  legend: string;
  checkboxes: string[];
}

export interface Textarea {
  id: string;
  label: string;
  placeholder: string;
}

export interface FormContainer {
  column: string;
  children: ReactNode;
}

export interface Form {
  title: string;
  description: string;
  containers: formContainer[];
  buttonText: string;
}

export interface formContainer {
  column: 1 | 2;
  inputs: input[];
}

export type input =
  | ({ fieldType: "input" } & Input)
  | ({ fieldType: "select" } & Select)
  | ({ fieldType: "checkbox" } & Checkbox)
  | ({ fieldType: "textarea" } & Textarea);
