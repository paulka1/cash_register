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

export interface CartItem {
  product: ProductI;
  quantity: number;
}

export interface CartSubject {
  product: ProductI;
  buttonAction: string;
}
