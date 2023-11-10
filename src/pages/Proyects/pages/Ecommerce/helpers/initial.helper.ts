import { CartProviderProps, Product } from "../models";

export const initialCartContext: CartProviderProps<Product> = {
  cart: [],
  addToCart: (initialProduct: Product) => {},
  deleteOneToCart: (initialProduct: Product) => {},
  removeFromCart: (initialProduct: Product) => {},
  clearCart: () => {},
};
