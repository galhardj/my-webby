import { fetcher } from "@/src/lib/api/fetcher";
import { SSR } from "@/src/constants/rendering-type";
import {
  PokemonList,
  PokemonDetailApi,
  PokeType,
  PokemonDetail,
} from "@/src/type/pokemon";
import { pokemonList } from "@/src/lib/api/pokemon";

const pokemonDetailList: PokemonDetail[] = await Promise.all(
  pokemonList.map(async ({ url }: PokemonList) => {
    const pokemonDetail = await fetcher<PokemonDetailApi>(url, SSR);

    return {
      name: pokemonDetail.name,
      image: pokemonDetail.sprites.other["official-artwork"].front_default,
      type: pokemonDetail.types.map((typeItem: PokeType) => typeItem.type.name),
      gifs: Object.values(pokemonDetail.sprites.other.showdown).filter(
        (gif): gif is string => Boolean(gif),
      ),
      moves: pokemonDetail.moves.slice(0, 4).map((move) => move.move.name),
      abilities: pokemonDetail.abilities
        .slice(0, 4)
        .map((ability) => ability.ability.name),
    };
  }),
);

const allCategories = Array.from(
  new Set(pokemonDetailList.map((pokemon) => pokemon.type).flat()),
);

export { pokemonDetailList, allCategories };
