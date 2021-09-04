// My way
function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].forEach((num) => {
      if (!newArr.includes(num)) {
        newArr.push(num);
      }
    });
  }
  return newArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

// FCC Solution
function uniteUniqueFCC(arr) {
  let args = [...arguments];
  let result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }

  return result;
}

uniteUniqueFCC([1, 3, 2], [5, 2, 1, 4], [2, 1]);
