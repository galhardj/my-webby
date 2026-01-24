import { ReactNode } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export interface CheckboxItem {
  id: string;
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
  | ({ fieldType: "input" } & InputProps)
  | ({ fieldType: "select" } & Select)
  | ({ fieldType: "checkbox" } & Checkbox)
  | ({ fieldType: "textarea" } & Textarea);
