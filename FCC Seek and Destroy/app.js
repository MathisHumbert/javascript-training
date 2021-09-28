// My way
function destroyer(arr) {
  let allArguments = [];
  for (let i = 1; i < arguments.length; i++) {
    allArguments.push(arguments[i]);
  }
  arr = arr.filter((item) => !allArguments.includes(item));
  return arr;
}

console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53));

// FCC Solution
function destroyerFCC(arr, ...valsToRemove) {
  // var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter((elem) => !valsToRemove.includes(elem));
}
console.log(destroyerFCC(['tree', 'hamburger', 53], 'tree', 53));
