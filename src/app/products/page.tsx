import FestiveMenu from "@/src/components/common/Products/claude/ProductsClaude";
import ProductHovered from "@/src/components/common/Products/claude/ProductHovered";
import ProductList from "@/src/components/common/Products/ProductSection";
import { pokemonDetailList, allCategories } from "@/src/lib/domain/pokemon";
import CarouselSlide from "@/src/components/common/Products/claude/CarouselClaude";
import ProductDetail from "@/src/components/common/Products/ProductDetail";
import BannerClaude from "@/src/components/common/Products/claude/BannerClaude";

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
      <ProductDetail />
    </main>
  );
}
