import { fetcher } from "./fetcher";
import { SSR } from "@/src/constants/rendering-type";
import { PokeApi, type PokemonList } from "@/src/type/pokemon";

export const getPokemonList = async (): Promise<PokemonList[]> => {
  const { results } = await fetcher<PokeApi>(
    "https://pokeapi.co/api/v2/pokemon?limit=50",
    SSR,
  );

  return results;
};
