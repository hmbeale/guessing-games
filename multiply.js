const stdin = process.stdin;
const firstInt = getRandomIntInclusive (1,100);
const secondInt = getRandomIntInclusive (1,100);
const product = firstInt * secondInt;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//compares user input against product
stdin.addListener("data", function(d) {
    if (d != product){
      console.log('nope');
    }

    if (d == product){
      console.log('you got it, congrats');
      process.exit();
    }
  });


console.log(`enter the product of ${firstInt} and ${secondInt}`);
