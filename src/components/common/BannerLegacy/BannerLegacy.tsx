import Text from "@/src/components/atomic/atom/Text";
import Image from "@/src/components/atomic/atom/Image";

const BannerLegacy = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Text />
        <Image />
      </div>
    </section>
  );
};

export default BannerLegacy;
