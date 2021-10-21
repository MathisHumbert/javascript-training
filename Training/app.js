const copyArrayAndMultiplyBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
};

const copyArrayAndDivideBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
};

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
const resultBis = copyArrayAndDivideBy2(myArray);

// Solution
const copyArrayAndManipulate = (array, instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};

const multyiplyBy2 = (input) => {
  return input * 2;
};

const result3 = copyArrayAndManipulate([1, 2, 3], multyiplyBy2);
console.log(result3);
