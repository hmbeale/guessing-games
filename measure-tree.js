//measure tree
//measures depth of values in a tree
//one you might find while playing a 'higher-lower' number guessing game
//bounds are inclusive
const lowBound = 1;
const highBound = 500;

//how many 'guessLog' you might make to find a particular value in a
//tree defined by lowbound and highbound
const depthCount = (childValue) => {
  let leftBound = lowBound -1;
  let rightBound = highBound + 1;
  let search = 0;
  let guessLog = [];

  const depthSearch = (childValue) => {
    search = (Math.round((leftBound + rightBound)/2));
    guessLog.push(search);
    search > childValue ? rightBound = search : leftBound = search;
  }
  //
  while (search != childValue){
    depthSearch(childValue);
  }
  return guessLog;
}

let allDepths = new Map();
let allGuesses = new Map();
let someGuesses = new Map();

const initAllDepths = (min, max) => {
  for (let i = min; i<=max; i++){
    allDepths.set(`${i}`, depthCount(i).length)
  }
}
const initAllGuesses = (min, max) => {
  for (let i = min; i<=max; i++){
    allGuesses.set(`${i}`, depthCount(i));
  }
}

//removes all entries greater than maxDepth
//some Map object inputGuesses
const initSomeGuesses = (inputGuesses, maxDepth) => {
  for (let i = 1; i<=inputGuesses.size; i++){
    if ((inputGuesses.get(`${i}`)).length <= maxDepth){
      someGuesses.set(`${i}`, depthCount(i));
    }
  }
}


//initAllDepths (lowBound, highBound);
initAllGuesses(lowBound, highBound);
initSomeGuesses(allGuesses, 9);


//console.log(allDepths);
//console.log(allGuesses);
console.log(someGuesses);
