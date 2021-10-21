// closure
const functionCreator = () => {
  let counter = 0;
  const add3 = (num) => {
    const result = num + 3;
    return result;
  };
  return add3;
};

const generatedFunc = functionCreator();
const result = generatedFunc(2);

// inner function access
const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  };
  incrementCounter();
};
outer();

const outer2 = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  };
  return incrementCounter;
};

// outer2() => error
const newFunction = outer2();
newFunction();
newFunction();
// counter = 2
