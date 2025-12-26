import ProductItem from "./ProductItem";
import { memo } from "react";

interface ProductList {
  filteredList: any[];
  itemLen: number;
}

const ProductList = ({ filteredList, itemLen }: ProductList) => {
  return (
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
  );
};

export default memo(ProductList);
