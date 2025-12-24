"use client";

import { useState } from "react";
import ProductItem from "./ProductItem";

// TODO: to update types to not use 'any'
const ProductList = ({ pokemonList }: { pokemonList: any[] }) => {
  const [item, setItem] = useState(10);

  const showMoreHandler = () => setItem((prev) => prev + 5);
  const showMore = item < pokemonList.length;

  return (
    <div className="mx-auto my-8 max-w-4xl">
      <div className="flex flex-col items-center gap-6">
        <ul className="grid grid-cols-5 gap-4">
          {pokemonList.slice(0, item).map((pokemon: any, index: number) => {
            return (
              <ProductItem
                name={pokemon.name}
                image={pokemon.image}
                key={index}
              />
            );
          })}
        </ul>
        {showMore && (
          <button
            className="rounded-2xl border bg-amber-300 px-6 py-3"
            onClick={showMoreHandler}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
