interface PokemonDetail {
  name: string;
  image: string;
  type: string[];
  gifs: any[];
  moves: any[];
  abilities: any[];
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
  moves: any[];
  abilities: any[];
}

interface PokeType {
  type: {
    name: string;
  };
}

export type { PokeApi, PokemonList, PokemonDetailApi, PokemonDetail };
