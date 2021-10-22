// function decoration

const oncify = (convertMe) => {
  let counter = 0;
  const inner = (input) => {
    if (counter === 0) {
      const output = convertMe(input);
      counter++;
      return output;
    }
    return 'Sorry';
  };
  return inner;
};

const multiplyBy2 = (x) => x * 2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);

console.log(oncifiedMultiplyBy2(10));
console.log(oncifiedMultiplyBy2(10));

// Partial application
const multiply = (a, b) => a * b;
function prefillFunction(fn, prefilledValue) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefilledValue);
    return output;
  };
  return inner;
}

const multiplyBy3 = prefillFunction(multiply, 3);
const result = multiplyBy3(5);
console.log(result);
