function sumStrings(a, b) {
  let length = a.length >= b.length ? a.length : b.length;

  a = a.split('').reverse();
  b = b.split('').reverse();

  let bigger = false;
  let result = '';

  for (let i = 0; i < length; i++) {
    const num1 = a[i] === undefined ? 0 : Number(a[i]);
    const num2 = b[i] === undefined ? 0 : Number(b[i]);

    let sum = num1 + num2;
    if (bigger) sum++;

    if (sum >= 10) {
      result += sum.toString()[1];
      bigger = true;
      if (i === length - 1) {
        result += 1;
      }
    } else {
      result += sum;
      bigger = false;
    }
  }

  let del = true;
  return result
    .split('')
    .reverse()
    .filter((num) => {
      if (num == 0 && del) {
      } else {
        del = false;
        return num;
      }
    })
    .join('');
}

console.log(sumStrings('000000103', '08567'));
