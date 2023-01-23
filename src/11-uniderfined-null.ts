(() => {
  let myUnderdined: undefined | string = undefined;
  myUnderdined = undefined;
  myUnderdined = 'hello';

  let myNull: null | number = null;
  myNull = null;
  myNull = 12;

  type Name = undefined | string;

  function hi(name: Name) {
    let hello = 'hola ';

    // if (name) {
    //   console.log(hello + name);
    // } else {
    //   console.log(hello + 'nobody');
    // }
    console.log(hello += name?.toLocaleLowerCase() || "nobody");
    // opcional change ? se encarga de evaluar si es null o underfined
  }
  hi(undefined);
  hi('Andrés');
})();
