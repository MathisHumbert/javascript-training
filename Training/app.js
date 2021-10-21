// map
const map = (array, instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};

const multyiplyBy2 = (input) => input * 2;

const result = map([1, 2, 3], multyiplyBy2);
const result2 = map([1, 2, 3], (input) => input * 2);

// reduce
const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};

const add = (a, b) => a + b;
const summed = reduce([1, 2, 3], add, 0);
console.log(summed);

// filter
const array = [1, 2, 3, 4, 5, 6];
const greaterThan2 = (num) => num > 2;

const filteredArray = array.filter(greaterThan2);
console.log(filteredArray);

// chain higher order functions
const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add, 0);
console.log(sumOfGreaterThan2);
