import FestiveMenu from "@/src/components/common/Products/claude/ProductsClaude";
import ProductHovered from "@/src/components/common/Products/claude/ProductHovered";
import ProductList from "@/src/components/common/Products/ProductSection";
import CarouselSlide from "@/src/components/common/Products/claude/CarouselClaude";
import BannerClaude from "@/src/components/common/Products/claude/BannerClaude";
import { pokemonDetailList, allCategories } from "@/src/lib/domain/pokemon";

export default async function Page() {
  return (
    <main className="min-h-dvh">
      <FestiveMenu />
      <ProductHovered />
      <CarouselSlide />
      <BannerClaude />
      <ProductList
        productList={pokemonDetailList}
        allCategories={allCategories}
      />
    </main>
  );
}
