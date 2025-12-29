interface PokemonDetail {
  name: string;
  image: string;
  type: string[];
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
    };
  };
  types: PokeType[];
}

interface PokeType {
  type: {
    name: string;
  };
}

export type { PokeApi, PokemonList, PokemonDetailApi, PokemonDetail };
