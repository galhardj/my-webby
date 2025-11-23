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
