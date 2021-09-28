// My way
function diffArray(arr1, arr2) {
  var newArr = [];

  for (let i of arr1) {
    if (!arr2.includes(i)) {
      newArr.push(i);
    }
  }
  for (let i of arr2) {
    if (!arr1.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']));

// FCC solution
function diffArrayFCC(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}
console.log(
  diffArrayFCC(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
