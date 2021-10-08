function squareDigits(num) {
  let numArr = num.toString().split('');
  numArr = numArr.map((num) => Math.pow(parseInt(num), 2)).join('');
  return parseInt(numArr);
}

console.log(squareDigits(9119));
console.log(squareDigits(3212));
