(() => {
  const calcTotal = (prices: number[]) => {
    let total = 1;

    prices.forEach((item) => {
      total = total * item
    })
     return total
  }
  console.log(calcTotal([1,5,7,8,9]));
  // las funciones que no retornan nada, son de tipo void

  const total = (prices: number[]) => {

    console.log(calcTotal(prices));
  }
  total([1,2,4,4])

})();
