import type { Banner } from "@/src/type/content";

const Banner = ({ position, image, title, description, richText }: Banner) => {
  return (
    <section
      className={`flex flex-col gap-12 lg:gap-16 md:${position === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      <figure className="flex-1">
        <img
          className="block h-auto max-w-full rounded-md"
          src={image.src}
          alt={image.alt}
        />
      </figure>
      <div className="flex flex-1 flex-col justify-center gap-4 text-justify md:gap-5">
        <h2>{title}</h2>
        {richText ? richText : <p>{description}</p>}
      </div>
    </section>
  );
};

export default Banner;
