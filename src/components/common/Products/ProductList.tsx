import { fetchApi } from "@/src/lib/fetchApi";
import { SSR } from "@/src/constants/rendering-type";
import ProductItem from "./ProductItem";

// TODO: to update types to not use 'any'
const ProductList = async () => {
  const pokemonList = await fetchApi<any>(
    "https://pokeapi.co/api/v2/pokemon/",
    SSR,
  ).then((res) => res.results);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <ul className="grid grid-cols-5 gap-4">
        {pokemonList.map(async (pokemon: any, index: any) => {
          const pokemonDetails = await fetchApi<any>(pokemon.url, SSR);
          return (
            <ProductItem
              name={pokemonDetails.forms[0].name}
              image={pokemonDetails.sprites.other.home.front_default}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
