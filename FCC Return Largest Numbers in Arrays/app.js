function largestOfFour(arr) {
  let biggestNumber = [];
  for (let i of arr) {
    let actualBiggest = 0;
    for (let x of i) {
      if (x < actualBiggest && x < 0 && actualBiggest <= 0) {
        if (actualBiggest === 0) {
          actualBiggest = x;
        }
      }
      if (x > actualBiggest) {
        actualBiggest = x;
      }
    }
    biggestNumber.push(actualBiggest);
  }
  return console.log(biggestNumber);
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -2, -10],
]);
