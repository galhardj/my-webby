import { fetchApi } from "@/src/lib/fetchApi";
import { SSR } from "@/src/constants/rendering-type";
import FestiveMenu from "@/src/components/common/Products/ProductsClaude";
import ProductList from "@/src/components/common/Products/ProductList";

export default async function Page() {
  const { results: pokemonList }: { results: any[] } = await fetchApi<any>(
    "https://pokeapi.co/api/v2/pokemon?limit=40",
    SSR,
  );

  const pokemonDetailList: any[] = await Promise.all(
    pokemonList.map(async ({ url }: any) => {
      const pokemonDetail = await fetchApi<any>(url, SSR);

      return {
        name: pokemonDetail.forms[0].name,
        image: pokemonDetail.sprites.other.home.front_default,
      };
    }),
  );

  return (
    <main className="min-h-dvh">
      <FestiveMenu />
      <ProductList pokemonList={pokemonDetailList} />
    </main>
  );
}
