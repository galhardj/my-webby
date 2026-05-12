export interface AccordionItem {
  id: number;
  summary: string;
  description: string;
}

export interface Accordion {
  title?: string;
  accordions: AccordionItem[];
}
