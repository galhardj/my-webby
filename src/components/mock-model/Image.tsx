import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/src/constants/constants";

const Images = () => {
  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl ring-1 ring-gray-200">
      {/* Using next/image with a data URI to keep assets static in code */}
      <Image
        src={HOMEPAGE_CONTENT.heroImageDataUri}
        alt="Hero"
        fill
        priority
        sizes="(min-width: 768px) 40rem, 100vw"
        className="object-cover"
      />
    </div>
  );
};

export default Images;
