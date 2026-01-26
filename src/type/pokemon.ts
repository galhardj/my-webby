interface PokemonDetail {
  name: string;
  image: string;
  type: string[];
  gifs: string[];
  moves: string[];
  abilities: string[];
}

interface PokeApi {
  count: number;
  next: string;
  previous: any | null;
  results: PokemonList[];
}
interface PokemonList {
  name: string;
  url: string;
}

interface PokemonDetailApi {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
      [key: string]: any;
    };
  };
  types: PokeType[];
  moves: pokemonMove[];
  abilities: pokemonAbility[];
}

interface pokemonMove {
  move: {
    name: string;
  };
}

interface pokemonAbility {
  ability: { name: string };
}

interface PokeType {
  type: {
    name: string;
  };
}

interface PokemonData {
  pokemonDetailList: PokemonDetail[];
  allCategories: string[];
}

export type {
  PokeApi,
  PokemonList,
  PokemonDetailApi,
  PokemonDetail,
  PokeType,
  PokemonData,
};
