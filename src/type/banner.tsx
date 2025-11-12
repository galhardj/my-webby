export interface BannerTwo {
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
