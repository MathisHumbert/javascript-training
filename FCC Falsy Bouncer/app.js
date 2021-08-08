function bouncer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

bouncer([null, NaN, 1, 2, undefined]);
