(()=> {
  let myDymanicVar : any;

  myDymanicVar = "hola";
  myDymanicVar = 123;
  myDymanicVar = {}

  myDymanicVar = "hello";

  // transformar un tipo any a otro tipo de dato

  const rta = (myDymanicVar as number)
  console.log(typeof rta);

  const rta2 = (<number>myDymanicVar)

  console.log( typeof rta2);

})()
