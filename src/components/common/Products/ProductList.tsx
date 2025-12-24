import ProductItem from "./ProductItem";

// TODO: to update types to not use 'any'
const ProductList = ({ pokemonList }: { pokemonList: any[] }) => {
  return (
    <div className="mx-auto my-8 max-w-4xl">
      <ul className="grid grid-cols-5 gap-4">
        {pokemonList.map((pokemon: any, index: any) => {
          return (
            <ProductItem
              name={pokemon.name}
              image={pokemon.image}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
