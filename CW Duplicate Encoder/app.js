function duplicateEncode(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    word = word.toLowerCase();
    if (isNew(word, word[i], i)) result += ')';
    else result += '(';
  }

  return result;
}

function isNew(word, letter, i) {
  let startWord = word.slice(0, i);
  let endWord = word.slice(i + 1, word.length);
  let finalWord = startWord.concat('', endWord);
  return finalWord.includes(letter);
}

duplicateEncode('Success');
