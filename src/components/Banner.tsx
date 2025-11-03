import Text from "./atom/Text";
import Image from "./atom/Image";

const Banner = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Text />
        <Image />
      </div>
    </section>
  );
};

export default Banner;
