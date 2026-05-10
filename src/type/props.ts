export interface ContainerBlockProps {
  children: React.ReactNode;
  type: "standard-block" | "screen-centered";
}

export interface AccordionItemProps {
  id: number;
  summary: string;
  description: string;
  openItem: boolean;
  onItemClick: (id: number) => void;
}

export interface HeroBannerProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  description: string;
  link: {
    url: string;
    text: string;
  };
}
