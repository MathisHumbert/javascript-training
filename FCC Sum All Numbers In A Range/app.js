// My way
function sumAll(arr) {
  let [a, b] = arr;
  let total = 0;
  if (a > b) {
    let memory = a;
    a = b;
    b = memory;
  }
  for (a; a <= b; a++) {
    total += a;
  }
  return total;
}

console.log(sumAll([4, 1]));

// FCC solution
function sumAllFCC(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAllFCC([10, 5]));
