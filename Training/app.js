function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (func(x)) {
      return x;
    }
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
