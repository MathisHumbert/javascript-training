const reduce = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
};

const unionCallBack = (arr1, arr2) => {
  for (let i of arr2) {
    arr1.includes(i) ? '' : arr1.push(i);
  }
  return arr1;
};

const union = (...arrays) => {
  return reduce(arrays, unionCallBack, []);
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
