import { fetchApi } from "@/src/lib/fetchApi";
import { SSR } from "@/src/constants/rendering-type";
import FestiveMenu from "@/src/components/common/Products/claude/ProductsClaude";
import ProductList from "@/src/components/common/Products/ProductSection";
import {
  pokeApi,
  pokemonList,
  pokemonDetailApi,
  pokemonDetail,
} from "@/src/type/pokemon";

export default async function Page() {
  const { results: pokemonList }: { results: pokemonList[] } =
    await fetchApi<pokeApi>("https://pokeapi.co/api/v2/pokemon?limit=130", SSR);

  const pokemonDetailList: pokemonDetail[] = await Promise.all(
    pokemonList.map(async ({ url }: pokemonList) => {
      const pokemonDetail = await fetchApi<pokemonDetailApi>(url, SSR);

      return {
        name: pokemonDetail.forms[0].name,
        image: pokemonDetail.sprites.other.home.front_default,
        type: pokemonDetail.types.map((typeItem: any) => typeItem.type.name),
      };
    }),
  );

  const allCategories: string[] = Array.from(
    new Set(pokemonDetailList.map((pokemon) => pokemon.type).flat()),
  );

  return (
    <main className="min-h-dvh">
      <FestiveMenu />
      <ProductList
        pokemonList={pokemonDetailList}
        allCategories={allCategories}
      />
    </main>
  );
}
