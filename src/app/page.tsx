import BannerLegacy from "@/src/components/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/Footer/Footer";
import Banner from "@/src/components/Banner/Banner";
import { BANNER_TWO } from "@/src/constants/constants";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <BannerLegacy />
      <Banner content={BANNER_TWO} />
      <Footer />
    </main>
  );
}
