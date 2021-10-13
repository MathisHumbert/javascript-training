// My Solution
function balance(left, right) {
  //coding and coding....
  leftCounter = 0;
  rightCounter = 0;
  for (let i = 0; i < left.length; i++) {
    leftCounter += add(left[i]);
  }
  for (let j = 0; j < right.length; j++) {
    rightCounter += add(right[j]);
  }

  if (leftCounter > rightCounter) return 'Left';
  else if (leftCounter < rightCounter) return 'Right';
  else return 'Balance';
}

function add(letter) {
  if (letter === '?') return 3;
  else return 2;
}

console.log(balance('!?!!', '?!?'));
console.log(balance('!!???!????', '??!!?!!!!!!!'));

// CW user solution

function balanceS(left, right) {
  l = [...left].reduce((s, a) => s + (a == '?' ? 3 : 2), 0);
  r = [...right].reduce((s, a) => s + (a == '?' ? 3 : 2), 0);

  return l == r ? 'Balance' : l > r ? 'Left' : 'Right';
}

console.log(balanceS('!?!!', '?!?'));
