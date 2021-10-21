// function composition
const multiplyBy2 = (x) => x * 2;
const add3 = (x) => x + 3;
const divideBy5 = (x) => x / 5;

const initialResult = multiplyBy2(11);
const nexStep = add3(initialResult);
const finalStep = divideBy5(nexStep);
console.log(finalStep);

const result = divideBy5(add3(multiplyBy2(11)));
console.log(result);

// function composition with reduce
const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};

const runFunctionOnInput = (input, fn) => {
  return fn(input);
};

const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11);
console.log(output);
