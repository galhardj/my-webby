import ProductItem from "./ProductItem";
import { memo, Dispatch } from "react";

interface ProductList {
  filteredList: any[];
  itemLen: number;
  onSelectItem: Dispatch<string>;
}

const ProductList = ({ filteredList, itemLen, onSelectItem }: ProductList) => {
  return (
    <div className="flex flex-col items-end w-full gap-3 text-gray-400 xl:w-5xl">
      <p className="pr-2 text-xl font-bold">Count: {filteredList.length}</p>
      <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {filteredList.slice(0, itemLen).map((pokemon: any, index: number) => {
          return (
            <ProductItem
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              key={index}
              onSelectItem={onSelectItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default memo(ProductList);
