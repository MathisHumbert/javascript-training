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
