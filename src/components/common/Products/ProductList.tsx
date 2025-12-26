"use client";

import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBox from "./SearchBox";
import Button from "../Button";

// TODO: to update types to not use 'any'
const ProductList = ({ pokemonList }: { pokemonList: any[] }) => {
  const lengthDiff = 10;
  const [itemLen, setItemLen] = useState(lengthDiff);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterQuery.toLowerCase()),
  );

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(e.target.value);
    setItemLen(lengthDiff);
  };

  const ButtonSection = () => {
    return (
      <>
        {itemLen < filteredList.length ? (
          <div className="flex gap-3">
            <Button
              className="rounded-2xl border bg-amber-300 px-6 py-3 text-gray-600"
              onClick={() => setItemLen((prev) => prev + lengthDiff)}
            >
              Show more
            </Button>
            <Button
              className="rounded-2xl border bg-amber-400 px-9 py-3 text-gray-600"
              onClick={() => setItemLen(pokemonList.length)}
            >
              Show all
            </Button>
          </div>
        ) : filteredList.length > lengthDiff ? (
          <Button
            className="rounded-2xl border bg-blue-200 px-9 py-3 text-gray-600"
            onClick={() => setItemLen(lengthDiff)}
          >
            Minimize
          </Button>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <div className="mx-auto my-8 max-w-4xl">
      <div className="flex flex-col items-center gap-6">
        <SearchBox onFilterChange={filterHandler} />
        <ul className="grid grid-cols-5 gap-4">
          {filteredList.slice(0, itemLen).map((pokemon: any, index: number) => {
            return (
              <ProductItem
                name={pokemon.name}
                image={pokemon.image}
                key={index}
              />
            );
          })}
        </ul>
        <ButtonSection />
      </div>
    </div>
  );
};

export default ProductList;
