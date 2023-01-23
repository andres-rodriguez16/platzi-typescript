(() => {
  type User = {
    username: string;
    email: string;
  };

  function imprimirDatos(data: User): void {
    console.log(
      `Tu nombre de usuario es ${data.username} y tu email es ${data.email}`
    );
  }

  imprimirDatos({
    username: 'freddier',
    email: 'freddy@email.com',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let product: any[] = [];


  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes | undefined;
  }) => {
    product.push(data);
  };

  // para mandar parametros a una función que sea un objeto, simpre hay que colar el nombre de la propiedad, y el valor como parametros
  addProduct({ title: 'camisa', createdAt: new Date(), stock: 12 });

  console.log(product, 'product');
})();
