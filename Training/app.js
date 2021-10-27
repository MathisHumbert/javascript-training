function upArray(arr) {
  // ...
  if (typeof arr == undefined || arr == null || arr.length == 0) return null;

  for (let i of arr) {
    if (i < 0 || typeof i !== 'number' || i > 10) return null;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i] = arr[i] + 1;
      return arr;
    } else {
      arr[i] = 0;

      if (i === 0) {
        arr.unshift(1);
        return arr;
      }
    }
  }
}
