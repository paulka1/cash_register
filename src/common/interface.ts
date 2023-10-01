export interface ProductI {
  id: number;
  name: string;
  price: number;
  tva: number;
  image: string;
}

export interface CategoryI {
  name: string;
  products: ProductI[];
}

export interface MenuI {
  categories: CategoryI[];
}
