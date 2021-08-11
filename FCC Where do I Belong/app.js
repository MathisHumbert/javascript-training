function getIndexToIns(arr, num) {
  let value;
  if (arr.length === 0) {
    return 0;
  }
  let newArr = arr;
  newArr = newArr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    if (num <= newArr[i]) {
      value = newArr.indexOf(newArr[i]);
      return value;
    }
    if (i === newArr.length - 1 && num > newArr[i]) {
      value = arr.length;
      return value;
    }
  }
}

console.log(getIndexToIns([2, 5, 10], 15));
