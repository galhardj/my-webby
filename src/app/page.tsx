import BannerLegacy from "@/src/components/common/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/common/Footer/Footer";
import Banner from "@/src/components/common/Banner/Banner";
import Accordion from "@/src/components/common/Accordion/Accordion";
import { BANNER } from "@/src/constants/banner";
import { ACCORDION_ITEMS } from "@/src/constants/accordion";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <BannerLegacy />
      <Banner content={BANNER} />
      <Accordion accordions={ACCORDION_ITEMS} />
      <Footer />
    </main>
  );
}
