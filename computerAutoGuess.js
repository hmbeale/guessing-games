const stdin = process.stdin;

const lowBound = 1;
const highBound = 500;

console.log (`please input an integer from ${lowBound} through ${highBound}`);



const multiGuess = (secretNumber) => {
  let lowGuess = lowBound -1;
  let highGuess = highBound + 1;
  let guess = 0;
  let counter = 0;

  const computerGuess = (numberToGuess) => {
    guess = (Math.round((lowGuess + highGuess)/2));
    console.log(`is your number ${guess}?`);
    counter++;
    if (guess == numberToGuess){
      console.log('woo I got it');
      console.log (`it took me ${counter} tries`);
      process.exit();
    }
    else {
        console.log ('dang, that\'s not it')
    }
    guess > numberToGuess ? console.log ('ah, I should guess lower') : console.log ('ah I should guess higher');
    guess > numberToGuess ? highGuess = guess : lowGuess = guess;
    console.log (`so your number is between ${lowGuess} and ${highGuess}`);
  }

  while (guess != secretNumber){
    computerGuess(secretNumber);
  }

}
stdin.addListener("data", function(d) {
    if (d>highBound){
      console.log('that is more than 500');
    }
    if (d<lowBound){
      console.log('that is less than 1');
    }
    if (d <= highBound && d >= lowBound){
      console.log('I have recieved your number');
      multiGuess(d);
    }
  });
