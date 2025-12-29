import { fetcher } from "@/src/lib/api/fetcher";
import { SSR } from "@/src/constants/rendering-type";
import {
  PokemonList,
  PokemonDetailApi,
  PokemonDetail,
} from "@/src/type/pokemon";
import { pokemonList } from "@/src/lib/api/pokemon";

const pokemonDetailList: PokemonDetail[] = await Promise.all(
  pokemonList.map(async ({ url }: PokemonList) => {
    const pokemonDetail = await fetcher<PokemonDetailApi>(url, SSR);

    return {
      name: pokemonDetail.name,
      image: pokemonDetail.sprites.other["official-artwork"].front_default,
      type: pokemonDetail.types.map((typeItem: any) => typeItem.type.name),
    };
  }),
);

const allCategories: string[] = Array.from(
  new Set(pokemonDetailList.map((pokemon) => pokemon.type).flat()),
);

export { pokemonDetailList, allCategories };
