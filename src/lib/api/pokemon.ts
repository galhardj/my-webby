import { fetcher } from "./fetcher";
import { SSR } from "@/src/constants/rendering-type";
import { PokeApi, type PokemonList } from "@/src/type/pokemon";

const { results: pokemonList }: { results: PokemonList[] } =
  await fetcher<PokeApi>("https://pokeapi.co/api/v2/pokemon?limit=50", SSR);

export { pokemonList };
