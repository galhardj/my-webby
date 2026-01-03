import { Dispatch, SetStateAction } from "react";

interface ProductSection<ProductDetail> {
  productList: ProductDetail[];
  allCategories: string[];
}

interface ProductDetail<ProductDetail> {
  product: ProductDetail;
  onCloseModal: Dispatch<SetStateAction<string>>;
}

export type { ProductSection, ProductDetail };
