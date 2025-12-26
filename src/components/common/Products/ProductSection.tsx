"use client";

import { useState, useMemo } from "react";
import ProductList from "./ProductList";
import SearchBox from "./SearchBox";
import Button from "../Button";

// TODO: to update types to not use 'any'
const ProductSection = ({ pokemonList }: { pokemonList: any[] }) => {
  const lengthDiff = 10;
  const [itemLen, setItemLen] = useState(lengthDiff);
  const [filterQuery, setFilterQuery] = useState("");

  // useMemo; avoid .filter recalculation when "setItemLen" is triggered
  const filteredList = useMemo(
    () =>
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filterQuery.toLowerCase()),
      ),
    [filterQuery],
  );

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(e.target.value);
    setItemLen(lengthDiff);
  };

  const ButtonExpand = () => (
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
      {itemLen > lengthDiff && <ButtonCollapse />}
    </div>
  );

  const ButtonCollapse = () => (
    <Button
      className="rounded-2xl border bg-blue-200 px-9 py-3 text-gray-600"
      onClick={() => setItemLen(lengthDiff)}
    >
      Minimize
    </Button>
  );

  const ButtonSection = () => (
    <>
      {itemLen < filteredList.length ? (
        <ButtonExpand />
      ) : filteredList.length > lengthDiff ? (
        <ButtonCollapse />
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="mx-auto my-8 max-w-4xl">
      <div className="flex flex-col items-center gap-6">
        <SearchBox onFilterChange={filterHandler} />
        <ProductList filteredList={filteredList} itemLen={itemLen} />
        <ButtonSection />
      </div>
    </div>
  );
};

export default ProductSection;
