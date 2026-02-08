import Text from "@/src/components/mock-model/Text";
import Image from "@/src/components/mock-model/Image";

const BannerLegacy = () => {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Text />
        <Image />
      </div>
    </section>
  );
};

export default BannerLegacy;
