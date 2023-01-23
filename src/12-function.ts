(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes | undefined
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  console.log(createProductJson('Queso', new Date(), 2, 'M'));
  console.log(createProductJson('Arroz', new Date(), 2));

  const createProductJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  console.log(createProductJsonV2('Queso', new Date(), 2, 'M'));
  console.log(createProductJsonV2('Arroz', new Date(), 2));
})();
