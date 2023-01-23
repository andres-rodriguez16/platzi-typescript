(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes | undefined;
  };

  let product: Product[] = [];

  const addProduct = (data: Product) => {
    product.push(data);
  };

  addProduct({ title: 'camisa', createdAt: new Date(), stock: 12 });

  product.push()
  console.log(product, 'product');
})();
