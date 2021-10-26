const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((acc, curr) => {
    if (curr(input) === output) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

const addFive = (num) => num + 5;
const multiplyByTwo = (num) => num * 2;
const subtractOne = (num) => num - 1;
const fnArr = [addFive, multiplyByTwo, subtractOne];

console.log(functionValidator(fnArr, 5, 10)); // should log [num => num + 5, num => num * 2]
