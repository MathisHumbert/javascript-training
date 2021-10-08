function spinWords(string) {
  string = string.split(' ');
  return string
    .map((word) => {
      if (word.length >= 5) {
        return reverseWord(word);
      } else return word;
    })
    .join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(spinWords('Hey fellow warriors'));
