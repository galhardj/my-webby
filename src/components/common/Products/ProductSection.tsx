"use client";

import { useState, useMemo, Dispatch } from "react";
import ProductList from "./ProductList";
import SearchBox from "./SearchBox";
import SortItems from "./SortItems";
import Button from "../Button";
import ProductDetail from "./ProductDetail";
import { PokemonDetail } from "@/src/type/pokemon";
import type { ProductSection } from "@/src/type/product";

const ProductSection = ({
  productList,
  allCategories,
}: ProductSection<PokemonDetail>) => {
  const lengthDiff = 10;
  const [itemLen, setItemLen] = useState(lengthDiff);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setCategory] = useState("");
  const [activeProduct, setProduct] = useState("");

  const detailedProduct = productList.find(
    (product) => product.name === activeProduct,
  );

  // useMemo; avoid .filter recalculation when "setItemLen" is triggered
  const filteredList = useMemo(
    () =>
      productList.filter((product) => {
        const meetFilter = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const meetSort =
          selectedCat === "" || product.type.includes(selectedCat);
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
        className="px-6 py-3 text-gray-600 border rounded-2xl bg-amber-300"
        onClick={() => setItemLen((prev) => prev + lengthDiff)}
      >
        Show more
      </Button>
      <Button
        className="py-3 text-gray-600 border rounded-2xl bg-amber-400 px-9"
        onClick={() => setItemLen(productList.length)}
      >
        Show all
      </Button>
      {itemLen > lengthDiff && <ButtonCollapse />}
    </div>
  );

  const ButtonCollapse = () => (
    <Button
      className="py-3 text-gray-600 bg-blue-200 border rounded-2xl px-9"
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
    <div className="w-full px-4 my-8 sm:px-6 lg:px-10">
      <div className="flex flex-col items-center gap-6 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 text-md md:flex-row">
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
        <ProductList
          filteredList={filteredList}
          itemLen={itemLen}
          onSelectItem={setProduct}
        />
        <ButtonSection />
        {detailedProduct && (
          <ProductDetail product={detailedProduct} onCloseModal={setProduct} />
        )}
      </div>
    </div>
  );
};

export default ProductSection;
