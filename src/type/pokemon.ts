interface pokemonDetail {
  name: string;
  image: string;
  type: string[];
}

interface pokeApi {
  count: number;
  next: string;
  previous: any | null;
  results: pokemonList[];
}
interface pokemonList {
  name: string;
  url: string;
}

interface pokemonDetailApi {
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: pokeType[];
}

interface pokeType {
  type: {
    name: string;
  };
}

export type { pokeApi, pokemonList, pokemonDetailApi, pokemonDetail };
