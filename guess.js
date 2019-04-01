const stdin = process.stdin;
const min = 1;
const max = getRandomIntInclusive(min, (min + 299));
let secretNumber = getRandomIntInclusive(min,max);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//compares user input against secretNumber
stdin.addListener("data", function(d) {
    if (d>secretNumber){
      console.log('a lower number would be more accurate');
    }
    if (d<secretNumber){
      console.log('a higher number would be more accurate');
    }
    if (d == secretNumber){
      console.log('you guessed correctly, congrats');
      process.exit();
    }
  });


console.log(`pick a number from ${min} to ${max}`);
