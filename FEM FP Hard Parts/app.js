const reduce = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
};

// intersection
const intersectionCallBack = (arr1, arr2) => {
  let arrP = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[i] === arr2[y]) arrP.push(arr2[y]);
    }
  }
  return arrP;
};

const intersection = (...arrays) => {
  return reduce(arrays, intersectionCallBack, arrays[0]);
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

// union
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
