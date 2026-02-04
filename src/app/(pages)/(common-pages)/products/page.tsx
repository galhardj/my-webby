import FestiveMenu from "@/src/components/common/Products/claude/ProductsClaude";
import ProductHovered from "@/src/components/common/Products/claude/ProductHovered";
import ProductSectionWrapper from "@/src/components/common/Products/ProductSectionWrapper";
import CarouselSlide from "@/src/components/common/Products/claude/CarouselClaude";
import BannerClaude from "@/src/components/common/Products/claude/BannerClaude";

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
