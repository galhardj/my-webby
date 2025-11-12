import BannerLegacy from "../components/BannerLegacy/BannerLegacy";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/BannerTwo";
import { BANNER_TWO } from "../constants/constants";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <BannerLegacy />
      <Banner content={BANNER_TWO} />
      <Footer />
    </main>
  );
}
