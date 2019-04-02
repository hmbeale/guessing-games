//implement
//generate array one to n
//mark off multiples of 2, then the next unmarked and so on
const input = 100;

//returns array from 2 to n
const initArray = (n) => {
  let i = 2;
  let arr = [];

  while (i<n){
    arr.push(i);
    i++;
  }
  return arr;
}

let integerArr = initArray(input);

const applyOneSieve = (arr, n) => {
  //filters out all multiples of n but not n itself
  const result = arr.filter(x => (x % n != 0) || (x === n));
  return result;
}

//in progress
const applyAllSieves = arr => {
  //sieves start at two because all numbers are divisible by 1
  let i = 2;
  let response = arr;
  while (i<=response.length){
    response = applyOneSieve(response, i);
    i++;
  }
  return response;
}

response = applyAllSieves(integerArr);

console.log(input);
console.log(response);
