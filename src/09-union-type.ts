(() => {
  let userId: string | number;
  userId = 'heughsuhus';
  userId = 233;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleUpperCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('andres');
  greeting(12.7777);
})();
