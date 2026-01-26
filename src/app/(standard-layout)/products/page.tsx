import FestiveMenu from "@/src/components/common/Products/claude/ProductsClaude";
import ProductHovered from "@/src/components/common/Products/claude/ProductHovered";
import ProductSection from "@/src/components/common/Products/ProductSection";
import CarouselSlide from "@/src/components/common/Products/claude/CarouselClaude";
import BannerClaude from "@/src/components/common/Products/claude/BannerClaude";
import { getPokemonData } from "@/src/lib/domain/pokemon";

export default async function Page() {
  const { pokemonDetailList, allCategories } = await getPokemonData();

  return (
    <>
      <FestiveMenu />
      <ProductHovered />
      <CarouselSlide />
      <ProductSection
        productList={pokemonDetailList}
        allCategories={allCategories}
      />
      <BannerClaude />
    </>
  );
}
