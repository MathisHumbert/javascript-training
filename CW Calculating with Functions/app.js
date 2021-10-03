function zero(num) {
  return returnResult(num, 0);
}
function one(num) {
  return returnResult(num, 1);
}
function two(num) {
  return returnResult(num, 2);
}
function three(num) {
  return returnResult(num, 3);
}
function four(num) {
  return returnResult(num, 4);
}
function five(num) {
  return returnResult(num, 5);
}
function six(num) {
  return returnResult(num, 6);
}
function seven(num) {
  return returnResult(num, 7);
}
function eight(num) {
  return returnResult(num, 8);
}
function nine(num) {
  return returnResult(num, 9);
}

function plus(num) {
  return ['+', num];
}
function minus(num) {
  return ['-', num];
}
function times(num) {
  return ['*', num];
}
function dividedBy(num) {
  return ['/', num];
}

function returnResult(arrNum, value) {
  if (arrNum) {
    if (arrNum[0] === '/') {
      return Math.floor(value / arrNum[1]);
    }
    if (arrNum[0] === '*') {
      return value * arrNum[1];
    }
    if (arrNum[0] === '+') {
      return value + arrNum[1];
    }
    if (arrNum[0] === '-') {
      return value - arrNum[1];
    }
  } else {
    return value;
  }
}

console.log(eight(dividedBy(seven())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
