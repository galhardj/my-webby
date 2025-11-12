import BannerLegacy from "@/src/components/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/Footer/Footer";
import Banner from "@/src/components/Banner/Banner";
import { BANNER } from "@/src/constants/banner";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <BannerLegacy />
      <Banner content={BANNER} />
      <Footer />
    </main>
  );
}
