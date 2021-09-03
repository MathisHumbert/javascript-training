// My Way Missing letters
let alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function fearNotLetter(str) {
  let index = alphabet.indexOf(str.charAt(0));
  let word = undefined;
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] == alphabet[i + index])) {
      return (word = alphabet[alphabet.indexOf(str[i]) - 1]);
    }
  }
  return word;
}
console.log(fearNotLetter('abce'));

// FCC Solution
function fearNotLetterFCC(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
fearNotLetterFCC('abce');
