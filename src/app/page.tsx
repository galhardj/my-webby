import BannerLegacy from "@/src/components/common/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/common/Footer/Footer";
import Banner from "@/src/components/common/Banner/Banner";
import Accordion from "@/src/components/common/Accordion/Accordion";
import Form from "@/src/components/common/Form/Form";
import { BANNER } from "@/src/constants/banner";
import { ACCORDION_ITEMS } from "@/src/constants/accordion";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <BannerLegacy />
      <Banner
        position={BANNER.position}
        image={BANNER.image}
        title={BANNER.title}
        description={BANNER.description}
      />
      <Accordion
        title={ACCORDION_ITEMS.title}
        accordions={ACCORDION_ITEMS.accordions}
      />
      <Form />
      <Footer />
    </main>
  );
}
