import BannerLegacy from "@/src/components/common/Banner/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/common/Footer/Footer";
import Banner from "@/src/components/common/Banner/Banner";
import Accordion from "@/src/components/common/Accordion/Accordion";
import Form from "@/src/components/common/UserInput/organism/Form/Form";
import StatusCard from "@/src/components/css-framework/shadcn/StatusCard";
import HighlightCarousel from "@/src/components/css-framework/shadcn/HighlightCarousel";
import Timeline from "@/src/components/css-framework/daisyui/Timeline";
import Testimonial from "@/src/components/css-framework/tailwindcss/Testimonial";
import { BANNER } from "@/src/constants/banner";
import { ACCORDION_ITEMS } from "@/src/constants/accordion";
import { FORM } from "@/src/constants/form";

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
      <Form
        title={FORM.title}
        description={FORM.description}
        containers={FORM.containers}
        buttonText={FORM.buttonText}
      />
      <StatusCard />
      <HighlightCarousel />
      <Timeline />
      <Testimonial />
      <Footer />
    </main>
  );
}
