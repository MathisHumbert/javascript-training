// My Way
function steamrollArray(arr) {
  let newArr = [];

  function isNested(array) {
    for (let item of array) {
      if (Array.isArray(item)) {
        isNested(item);
      } else {
        newArr.push(item);
      }
    }
  }

  isNested(arr);
  return newArr;
}

steamrollArray([1, {}, [3, [[4]]]]);

// FCC Solution
function streamrollArrayFCC(arr) {
  const flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...streamrollArrayFCC(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

streamrollArrayFCC([1, {}, [3, [[4]]]]);
