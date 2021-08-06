function findLongestWordLength(str) {
  let words = str.split(' ');
  words = [...words];
  let maxWord = 0;

  for (let i = 0; i < words.length; i++) {
    let actualWord = words[i].length;
    if (actualWord > maxWord) {
      maxWord = actualWord;
    }
  }
  return console.log(maxWord);
}

findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology'
);
