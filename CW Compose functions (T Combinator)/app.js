// My Solution
var compose = function () {
  if (arguments.length === 1) return arguments[0];
  const funcArguments = [...arguments];
  let value = funcArguments[0];
  funcArguments.splice(0, 1);
  return funcArguments.reduce((acc, curr) => {
    acc = curr(acc);
    return acc;
  }, value);
};

// Codewar user solution
const compose2 = (x, ...fs) => fs.reduce((acc, curr) => curr(acc), x);
