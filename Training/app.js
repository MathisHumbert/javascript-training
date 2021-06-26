const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const goodName = (str) => {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    let word;
    let value;
    word = str[i];
    total += scores[word];
  }
  if (total <= 60) {
    return console.log('NOT TOO GOOD');
  } else if (total >= 61 && total <= 300) {
    return console.log('PRETTY GOOD');
  } else if (total >= 301 && total <= 599) {
    return console.log('VERY GOOD');
  } else {
    return console.log('THE BEST');
  }
};

goodName('PUBG');

let years = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

const afterNYears = (ar, names, n) => {
  ar[names] += n;
  return console.log(years[names]);
};

afterNYears(years, 'Julian', 2);

const mapping = (letters) => {
  let map = {};

  for (let i of letters) {
    let word = i.toUpperCase();
    map[i] = word;
  }
  return console.log(map);
};

mapping(['a', 'v', 'y', 'z']);
