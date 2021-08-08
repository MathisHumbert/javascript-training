function titleCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  words = words.join(' ');
  return words;
}

console.log(titleCase("I'm a little tea pot"));
