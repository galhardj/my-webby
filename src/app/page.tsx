import BannerLegacy from "@/src/components/common/BannerLegacy/BannerLegacy";
import Footer from "@/src/components/common/Footer/Footer";
import Banner from "@/src/components/common/Banner/Banner";
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
