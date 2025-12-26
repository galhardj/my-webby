"use client";

import { useState } from "react";
import ProductItem from "./ProductItem";

// TODO: to update types to not use 'any'
const ProductList = ({ pokemonList }: { pokemonList: any[] }) => {
  const lengthDiff = 10;
  const [item, setItem] = useState(lengthDiff);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterQuery.toLowerCase()),
  );

  const showMoreHandler = () => setItem((prev) => prev + lengthDiff);
  const showMore = item < filteredList.length;

  // TODO: Consider moving SVG import from different file
  return (
    <div className="mx-auto my-8 max-w-4xl">
      <div className="flex flex-col items-center gap-6">
        <div>
          <label htmlFor="filter-product" className="sr-only">
            Search for items
          </label>
          <div className="relative">
            <input
              id="filter-product"
              type="text"
              className="rounded-2xl border-2 px-12 py-6"
              onChange={(e) => {
                setFilterQuery(e.target.value);
                setItem(lengthDiff);
              }}
              placeholder="Search pokemon"
            />
            <svg
              className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 transform text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="grid grid-cols-5 gap-4">
          {filteredList.slice(0, item).map((pokemon: any, index: number) => {
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
