export interface Banner {
  content: {
    position: "left" | "right";
    image: {
      src: string;
      alt: string;
    };
    title: string;
    description: string;
  };
}

export interface AccordionItem {
  id: number;
  summary: string;
  description: string;
}

export interface Accordion {
  accordions: AccordionItem[];
}
