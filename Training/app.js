function sumFibs(num) {
  let f1 = 0;
  let f2 = 1;
  let total = 0;

  while (f2 <= num) {
    if (f2 % 2 !== 0) {
      total += f2;
    }
    f2 += f1;
    f1 = f2 - f1;
  }
  return total;
}

console.log(sumFibs(1000));
