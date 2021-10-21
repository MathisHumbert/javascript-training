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
console.log(generatedFunc);
console.log(result);
