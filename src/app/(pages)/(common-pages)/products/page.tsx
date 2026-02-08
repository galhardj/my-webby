import FestiveMenu from "@/src/components/css-framework/Products";
import ProductHovered from "@/src/components/css-framework/ProductHovered";
import ProductSectionWrapper from "@/src/components/common/Products/ProductSectionWrapper";
import CarouselSlide from "@/src/components/css-framework/Carousel";
import BannerClaude from "@/src/components/css-framework/Banner";

export default function Page() {
  return (
    <>
      <FestiveMenu />
      <ProductHovered />
      <CarouselSlide />
      <ProductSectionWrapper />
      <BannerClaude />
    </>
  );
}
