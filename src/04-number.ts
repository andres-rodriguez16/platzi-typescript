(() => {
  let productPrice = 120;
  productPrice = 112;
  console.log("productPrice", productPrice);

  let customerAge: number = 29;
  customerAge++;

  console.log("customerAge", customerAge);

  let productInStock: number;
  console.log("productInStock", productInStock);

  let discount = parseInt("100")
  console.log(typeof discount );
  if (discount <= 200) {
    console.log("apply");
  }else {
    console.log("not apply");
  }

 let hex = 0xfff;
 console.log(hex, "hex");

 let bin = 0b1001
 console.log(bin, "bin");

})();
