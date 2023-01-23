import { Product } from './product.model'


export let products: Product[] = [];

export const addProduct = (data: Product) : void => {
  products.push(data);
};


export const calcStock = (): number => {
  let total = 0;
  products.forEach(item => {
    total = total + item.stock
  })
  return total
}
