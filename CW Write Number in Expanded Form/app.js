// My Solution
function expandedForm(num) {
  num = [...num.toString()];
  let expanded = [];

  function addZero(num, zero) {
    let value = '';
    value += num;
    for (let i = 0; i < zero; i++) {
      value += '0';
    }
    return value;
  }

  for (let i = 0; i < num.length; i++) {
    if (!(num[i] == 0)) expanded.push(addZero(num[i], num.length - 1 - i));
  }
  return expanded.join(' + ');
}

// CW user solution
const expandedFormS = (n) => {
  return n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => {
      a * Math.pow(10, i);
    })
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');
};

expandedForm(70304);
expandedFormS(454);
