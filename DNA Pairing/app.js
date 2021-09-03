// My Way
function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let word = str.charAt(i);
    if (word === 'C') {
      arr.push([word, 'G']);
    } else if (word === 'G') {
      arr.push([word, 'C']);
    } else if (word === 'T') {
      arr.push([word, 'A']);
    } else {
      arr.push([word, 'T']);
    }
  }
  return arr;
}

console.log(pairElement('ATCGA'));

// FCC Solution
function pairElementFCC(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  let arr = str.split('');
  return arr.map((x) => [x, pairs[x]]);
}
console.log(pairElementFCC('GCG'));
