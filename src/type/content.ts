export interface Banner {
  position: "left" | "right";
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description?: string;
  richText?: React.ReactNode;
}

export interface AccordionItem {
  id: number;
  summary: string;
  description: string;
}

export interface Accordion {
  title?: string;
  accordions: AccordionItem[];
}
