import { Dispatch, SetStateAction } from "react";

interface ProductSection<ProductDetail> {
  productList: ProductDetail[];
  allCategories: string[];
}

interface ProductDetail<ProductDetail> {
  product: ProductDetail;
  onCloseModal: Dispatch<SetStateAction<string>>;
}

interface ProductClaude {
  id: number;
  name: string;
  image: string;
  isVegetarian: boolean;
  category: string;
  description: string;
  price: string;
  ingredients: string[];
}

export type { ProductSection, ProductDetail, ProductClaude };
