(() => {
  let prices = [1, 3, 4, 5, 6, 788, 8];
  //prices.push("dgdgd")
  prices.push(1);

  let product = [1, "hola", true]
  product.push(false)

  let mixed : (string | number | object)[] = []

  mixed.push(12)
  mixed.push("hello")
  mixed.push({})
  console.log(mixed);

  let numbers = ["jjjj"]
  numbers.map(item => item * 2)
   console.log(numbers);

})();
