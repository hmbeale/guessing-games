const stdin = process.stdin;
stdin.setEncoding('utf8');

const lowBound = 1;
const highBound = 500;

console.log (`please think of a number from ${lowBound} to ${highBound}, inclusive`);
console.log (`is your number ${Math.round((lowBound + highBound/2))}?`);
console.log (`if yes, please type \'y\'`);
console.log (`if no, please type \'h\' for me to guess higher or ` +
             `\'l\' for me to guess lower`);

let lowGuess = lowBound -1;
let highGuess = highBound + 1;
let guess = Math.round((lowGuess + highGuess)/2);

stdin.addListener("data", function(d) {
    //takes 'l' or 'h'
    //updates guessing parameters based on input
    const computerGuess = (higherOrLower) => {
      higherOrLower === 'h' ? console.log ('ah, so I should guess higher') :
                              console.log ('ah, so I should guess lower') ;
      higherOrLower === 'h' ? lowGuess = guess : highGuess = guess;
      console.log(`your number must be between ${lowGuess} and ${highGuess}`);
      guess = Math.round((lowGuess + highGuess)/2);
      console.log(`is your number ${guess}?`);
    }

    if (d.trim() === 'l'){
      computerGuess('l');
    }
    if (d.trim() === 'h'){
      computerGuess('h');
    }
    if (d.trim() === 'y'){
      console.log('woo! I got it.');
      process.exit();
    }
  });
