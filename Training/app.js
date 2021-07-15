const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeFirstTwo = (item) => {
  [a, b, ...arr] = item;
  return arr;
};

const test = removeFirstTwo(source);
console.groupCollapsed(test);
