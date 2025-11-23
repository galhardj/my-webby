import BannerLegacy from "@/src/components/common/Banner/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/common/Footer/Footer";
import Banner from "@/src/components/common/Banner/Banner";
import Accordion from "@/src/components/common/Accordion/Accordion";
// import Form from "@/src/components/common/UserInput/Form/Form";
import FormRefactor from "@/src/components/common/UserInput/organism/FormRefactor/FormRefactor";
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
      {/* <Form /> */}
      <FormRefactor />
      <Footer />
    </main>
  );
}
