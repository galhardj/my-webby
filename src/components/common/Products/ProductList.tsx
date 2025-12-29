import ProductItem from "./ProductItem";
import { memo } from "react";

interface ProductList {
  filteredList: any[];
  itemLen: number;
}

const ProductList = ({ filteredList, itemLen }: ProductList) => {
  return (
    <div className="flex flex-col items-end gap-3 text-gray-400">
      <p className="pr-2 text-xl font-bold">Items: {filteredList.length}</p>
      <ul className="grid grid-cols-5 gap-4">
        {filteredList.slice(0, itemLen).map((pokemon: any, index: number) => {
          return (
            <ProductItem
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default memo(ProductList);
