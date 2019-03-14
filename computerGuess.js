const stdin = process.stdin;
stdin.setEncoding('utf8');

const lowBound = 1;
const highBound = 500;

console.log (`please think of a number from ${lowBound} to ${highBound}, inclusive`);
console.log (`is your number ${Math.round((lowBound + highBound/2))}?`);
console.log (`if yes, please type \'y\'`);
console.log (`if no, please type \'h\' for me to guess higher and ` +
             `\'l\' for me to guess lower`);

let lowGuess = lowBound -1;
let highGuess = highBound + 1;
let guess = Math.round((lowGuess + highGuess)/2);

stdin.addListener("data", function(d) {
    if (d.trim() === 'l'){
      console.log('ah, I should guess lower');
      highGuess = guess;
      guess = Math.round((lowGuess + highGuess)/2);
      console.log(`is your number ${guess}?`)
    }
    if (d.trim() === 'h'){
      console.log('ah I should guess higher');
      lowGuess = guess;
      guess = Math.round((lowGuess + highGuess)/2);
      console.log(`is your number ${guess}?`)
    }
    if (d.trim() === 'y'){
      console.log('woo! I got it.');
      process.exit();
    }
  });
