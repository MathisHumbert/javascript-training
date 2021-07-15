const sum = (...arguments) => {
  return arguments.reduce((acc, value) => acc + value, 0);
};

console.log(sum(2, 2));
