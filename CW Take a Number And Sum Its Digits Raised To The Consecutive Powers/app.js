function sumDigPow(a, b) {
  // Your code here
  let numberArr = [];

  // switch the numbers
  if (a > b) {
    [a, b] = [b, a];
  }

  // iterate over the range
  for (a; a < b; a++) {
    if (addPow(a)) numberArr.push(a);
  }
  return numberArr;
}

sumDigPow(200, 1);

function addPow(num) {
  let acc = 0;
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    acc += Math.pow(parseInt(numString[i]), i + 1);
  }
  return acc === num;
}
