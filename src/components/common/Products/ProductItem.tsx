"use client";

import { cn } from "@/src/lib/utils/mergeTailwind";
import { typeColor } from "@/src/constants/products";
import { Dispatch } from "react";

interface ProductItem {
  name: string;
  image: string;
  type: string[];
  onSelectItem: Dispatch<string>;
}

const ProductItem = ({
  name,
  image,
  type: types,
  onSelectItem: selecthandler,
}: ProductItem) => {
  const ProductCategory = () => (
    <ul className="ml-1 flex gap-1">
      {types.map((type, index) => (
        <li
          key={index}
          className={cn(
            "min-w-18 rounded-xl border-2 py-0.5 text-center text-gray-500",
            typeColor[type] ?? "bg-white",
          )}
        >
          {type}
        </li>
      ))}
    </ul>
  );

  return (
    <li className="rounded-2xl border-2">
      <button
        className="flex flex-col gap-2"
        onClick={() => selecthandler(name)}
      >
        <img src={image} alt={name} className="pb-6" />
        <ProductCategory />
        <hr className="h-px bg-gray-400" />
        <p className="px-4 py-3 text-2xl font-bold">{name}</p>
      </button>
    </li>
  );
};

export default ProductItem;
