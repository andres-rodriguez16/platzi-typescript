import { type } from "os";

(()=>{


  // Para crear un tipo de tipado, los nombre se escriben en pascalcase
  type UserId = string | number;
  let userId: UserId;

  // literal types
  type Sizes = "S" | "M" | "XS"| "L"

  function greeting(myText: UserId, size : Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleUpperCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('andres', "XS");
  greeting(12.7777, "sfsfsf");
})()

