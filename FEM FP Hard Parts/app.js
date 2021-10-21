const reduce = (array, callback, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
};

const sameValue = (arr1, arr2) => {
  let arrP = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[i] === arr2[y]) arrP.push(arr2[y]);
    }
  }
  return arrP;
};

const intersection = (...arrays) => {
  return reduce(arrays, sameValue, arrays[0]);
};

intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]);
