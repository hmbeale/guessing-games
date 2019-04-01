const stdin = process.stdin;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const checkPrime = (n) => {
  let i = 2;
  while (i < n){
    if (n % i == 0 && (n!= i)){
      return false;
    }
    i++;
  }
  return true;
}

const checkfactors = (n) => {
  let i = 2;
  let factors = [];
  let primefactors = [];
  while (i < n){
    if (n % i == 0 && (n!= i)){
      factors.push(i);
    }
    i++;
  }

  i = 0;
  while (i<factors.length){
    if (checkPrime(factors[i])){primefactors.push(factors[i])};
    i++;
  }
  return primefactors;
}

//handles user input
stdin.addListener("data", function(d) {
    if (d <= 2){
      console.log('please enter a number greater than two');
    }
    if (d >= 2){
      console.log(checkfactors(d));
    }

  });


console.log('enter a positive integer greater than two ' +
            'to see its prime factors');
