// Solution
const copyArrayAndManipulate = (array, instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};

const multyiplyBy2 = (input) => input * 2;
const result3 = copyArrayAndManipulate([1, 2, 3], multyiplyBy2);
console.log(result3);
