function upArray(arr) {
  for (let item of arr) {
    if (item < 0 || item > 9 || !(typeof item === 'number')) return null;
  }
  if (!typeof arr === 'object') return null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      if (i === 0) {
        arr[i] = 0;
        arr.unshift(1);
        return arr;
      } else arr[i] = 0;
    } else {
      arr[i] = arr[i] + 1;
      return arr;
    }
  }
}

console.log(upArray('STDERR'));
