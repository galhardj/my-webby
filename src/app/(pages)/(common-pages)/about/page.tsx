import BannerLegacy from "@/src/components/mock-model/BannerLegacy";
import Banner from "@/src/components/common/Banner";
import Accordion from "@/src/components/common/Accordion";
import Form from "@/src/components/common/Forms/Contact/Contact";
import { BANNER } from "@/src/constants/banner";
import { ACCORDION_ITEMS } from "@/src/constants/accordion";
import { FORM } from "@/src/constants/form";

export default function Page() {
  return (
    <>
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
      <Form
        title={FORM.title}
        description={FORM.description}
        containers={FORM.containers}
        buttonText={FORM.buttonText}
      />
    </>
  );
}
