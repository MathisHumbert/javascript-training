// My Way
function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr = arr.splice(arr.indexOf(arr[i]), arr.length);
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
});

// FCC Solutions
function dropElementsFCC1(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

function dropElementsFCC2(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElementsFCC1([1, 2, 3, 4], function (n) {
  return n >= 3;
});

dropElementsFCC2([1, 2, 3, 4], function (n) {
  return n >= 3;
});
