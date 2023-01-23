import { addProduct, calcStock, products } from './service';

addProduct({ name: 'camisa', createdAt: new Date(), stock: 12 });
addProduct({ name: 'pantalón', createdAt: new Date(), stock: 5 });

console.log(calcStock());

