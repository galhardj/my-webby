"use client";

import { useState, useMemo, Dispatch } from "react";
import ProductList from "./ProductList";
import SearchBox from "./SearchBox";
import SortItems from "./SortItems";
import Button from "../Button";
import { pokemonDetail } from "@/src/type/pokemon";

interface ProductSection {
  pokemonList: pokemonDetail[];
  allCategories: string[];
}

// TODO: to update types to not use 'any'
const ProductSection = ({ pokemonList, allCategories }: ProductSection) => {
  const lengthDiff = 10;
  const [itemLen, setItemLen] = useState(lengthDiff);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setCategory] = useState("");

  // useMemo; avoid .filter recalculation when "setItemLen" is triggered
  const filteredList = useMemo(
    () =>
      pokemonList.filter((pokemon) => {
        const meetFilter = pokemon.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const meetSort =
          selectedCat === "" || pokemon.type.includes(selectedCat);
        return meetFilter && meetSort;
      }),
    [searchQuery, selectedCat],
  );

  const changeHandler =
    <T extends HTMLInputElement | HTMLSelectElement>(
      setFilter: Dispatch<string>,
    ) =>
    (e: React.ChangeEvent<T>) => {
      setFilter(e.target.value);
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
        <div className="flex gap-8">
          <SearchBox
            filterQuery={searchQuery}
            onSearch={changeHandler<HTMLInputElement>(setSearchQuery)}
          />
          <SortItems
            selectedCat={selectedCat}
            onSorting={changeHandler<HTMLSelectElement>(setCategory)}
            allCategories={allCategories}
          />
        </div>
        <ProductList filteredList={filteredList} itemLen={itemLen} />
        <ButtonSection />
      </div>
    </div>
  );
};

export default ProductSection;
