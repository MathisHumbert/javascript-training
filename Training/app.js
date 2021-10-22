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
