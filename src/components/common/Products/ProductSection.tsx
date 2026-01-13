"use client";

import { useState, useMemo, Dispatch } from "react";
import ProductList from "./ProductList";
import SearchBox from "./SearchBox";
import SortItems from "./SortItems";
import Button from "../Button";
import ProductDetail from "./ProductDetail";
import { PokemonDetail } from "@/src/type/pokemon";
import type { ProductSection } from "@/src/type/product";

//TODO: see if MediaQuery should be implemented; https://www.linkedin.com/pulse/why-you-should-stop-using-media-queries-nextjs-felipe-rocha-82e8f
//TODO: https://stackoverflow.com/questions/76732951/how-do-i-use-media-queries-in-the-next-js-app-router
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
        className="rounded-2xl border bg-amber-300 px-6 py-3 text-gray-600"
        onClick={() => setItemLen((prev) => prev + lengthDiff)}
      >
        Show more
      </Button>
      <Button
        className="rounded-2xl border bg-amber-400 px-9 py-3 text-gray-600"
        onClick={() => setItemLen(productList.length)}
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

  // TODO: adding the reset button for product.filter; SearchBox, SortItems
  return (
    <div className="my-8 w-full px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <div className="text-md flex flex-col gap-8 md:flex-row">
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
