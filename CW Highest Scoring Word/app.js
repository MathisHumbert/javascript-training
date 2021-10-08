// My solution
function high(x) {
  x = x.split(' ');

  let xCode = x.map((word) => {
    let acc = 0;
    for (let i = 0; i < word.length; i++) {
      acc += word.charCodeAt(i) - 96;
    }
    return acc;
  });

  return x[xCode.indexOf(Math.max(...xCode))];
}

console.log(high('what time are we climbing up the volcano'));

// CodeWar user solution
function highS(s) {
  let as = s
    .split(' ')
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
console.log(highS('what time are we climbing up the volcano'));
