const stdin = process.stdin;

const checkPrime = (n) => {
  let i = 2;
  while (i < n){
    if (n % i == 0 && (n!= i)){
      return `that number is divisble by ${i}`;
    }
    i++;
  }
  return 'that number is prime';
}

//handles user input
stdin.addListener("data", function(d) {
    if (d <= 2){
      console.log('please enter a number greater than two');
    }
    if (d >= 2){
      console.log(checkPrime(d));
    }

  });


console.log('enter a positive integer greater than two ' +
            'to see if it\'s prime. Prime numbers larger than eight digits ' +
            'may be slow to process.');
