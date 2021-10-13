function round(number) {
  let afterDot = parseInt(number.toString().split('.')[1]);

  number = parseInt(number.toString().split('.')[0]);
  if (afterDot > 10)
    afterDot = parseInt(afterDot.toString()[0] + afterDot.toString()[1]);

  if (afterDot.toString().length == 1) {
    if (afterDot > 4.9) return number + 1;
    else return number;
  } else {
    if (afterDot > 49) return number + 1;
    else return number;
  }
}

function ceil(number) {
  if (Number.isInteger(number)) return number;
  else return (number = parseInt(number.toString().split('.')[0]) + 1);
}

function floor(number) {
  if (Number.isInteger(number)) return number;
  else return parseInt(number.toString().split('.')[0]);
}

console.log(round(0.5));
