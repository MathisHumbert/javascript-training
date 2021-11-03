// My Solution
var moveZeros = function (arr) {
  let num = arr.length;
  for (let i = 0; i < num; i++) {
    if (arr[i] === 0) {
      arr.splice(arr.indexOf(arr[i]), 1);
      arr.push(0);
    }
  }
  return arr;
};

// Codewar user solution
const moveZeros2 = function (arr) {
  return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
};
