import type { Banner } from "@/src/type/content";

const Banner = ({ position, image, title, description, richText }: Banner) => {
  return (
    <section
      className={`flex gap-6 ${position === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      <figure className="flex-1">
        <img className="block max-w-full h-auto" src={image.src} alt={image.alt} />
      </figure>
      <div className="flex flex-col justify-center gap-4 flex-1">
        <h2 className="h2">{title}</h2>
        <p>{description}</p>
        {richText}
      </div>
    </section>
  );
};

export default Banner;
