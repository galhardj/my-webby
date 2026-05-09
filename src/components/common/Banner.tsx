import type { Banner } from "@/src/type/content";

const Banner = ({ position, image, title, description, richText }: Banner) => {
  return (
    <section
      className={`flex flex-col gap-8 lg:gap-16 md:${position === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      <figure className="md:w-2/5">
        <img
          className="block h-auto max-w-full rounded-md"
          src={image.src}
          alt={image.alt}
        />
      </figure>
      <div className="flex flex-col justify-center gap-4 text-justify md:w-3/5 md:gap-5">
        <h2>{title}</h2>
        {richText ? richText : <p>{description}</p>}
      </div>
    </section>
  );
};

export default Banner;
