// global functions
const reduce = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
};

const runFunctionOnInput = (input, fn) => {
  return fn(input);
};

const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
const half = (n) => n / 2;
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes('6');
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;

// pipe
const pipe = (arrOfFuncs, value) => {
  return arrOfFuncs.reduce(runFunctionOnInput, value);
};

// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// rating
const rating = (arrOfFuncs, value) => {
  let rate = arrOfFuncs
    .map((fn) => fn(value))
    .map((num) => (num === true ? 1 : 0))
    .reduce((a, b) => a + b);

  return (rate / arrOfFuncs.length) * 100;
};

// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// objFilter
const objFilter = (obj, callback) => {
  let filteredObj = {};
  for (let i in obj) {
    if (callback(i) === obj[i]) filteredObj[i] = obj[i];
  }
  return filteredObj;
};

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;

// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// commutative
const commutative = (func1, func2, value) => {
  return (
    reduce([func1, func2], runFunctionOnInput, value) ===
    reduce([func2, func1], runFunctionOnInput, value)
  );
};

// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// intersection
const intersectionCallBack = (arr1, arr2) => {
  let arrP = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[i] === arr2[y]) arrP.push(arr2[y]);
    }
  }
  return arrP;
};

const intersection = (...arrays) => {
  return reduce(arrays, intersectionCallBack, arrays[0]);
};

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );

// union
const unionCallBack = (arr1, arr2) => {
  for (let i of arr2) {
    arr1.includes(i) ? '' : arr1.push(i);
  }
  return arr1;
};

const union = (...arrays) => {
  return reduce(arrays, unionCallBack, []);
};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
