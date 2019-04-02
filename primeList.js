const stdin = process.stdin;

const checkPrime = (n) => {
  let i = 2;
  while (i <= n){
    if (n % i == 0 && (n!= i)){
      return false;
    }
    i++;
  }
  return true;
}

const getFactor = (n) => {
  let i = 2;
  while (i <= n){
    if (n % i == 0 && (n!= i)){
      return n;
    }
    i++;
  }
  return 'prime';
}

const listPrimes = (max) => {
  let i = 2;
  let primeArr = [];

  while(i<=max){
    if (checkPrime(i)){
      primeArr.push(i);
    }
    i++;
  }
  return primeArr;
}

//handles user input
stdin.addListener("data", function(d) {
    if (d <= 1){
      console.log('please enter a number greater than one');
    }
    if (d >= 2){
      console.log(listPrimes(d));
      process.exit();
    }
  });


console.log('input a reasonably small maximum integer larger than one for the prime list');
