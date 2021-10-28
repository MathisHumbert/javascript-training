// My solution
function prefill(n, v) {
  let nNum = parseFloat(n);
  const regex = /[a-zA-Z]/;
  if (
    regex.test(n) ||
    typeof n === 'boolean' ||
    !Number.isInteger(nNum) ||
    nNum < 0 ||
    n == -Infinity ||
    n == +Infinity
  )
    throw new TypeError(`${n} is invalid`);

  return Array(n).fill(v);
}

// Codewar user solution
function prefill2(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? Array(n).fill(v) : [];
}
