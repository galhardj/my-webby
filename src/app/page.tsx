import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerTwo from "../components/BannerTwo/BannerTwo";
import { BANNER_TWO } from "../constants/constants";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Banner />
      <BannerTwo content={BANNER_TWO} />
      <Footer />
    </main>
  );
}
