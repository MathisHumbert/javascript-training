let stringTest = 'alors comment bebe';

const removeABC = (str) => {
  let no = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      str = str.replace('a', '');
      no++;
    }
    if (str[i] === 'b') {
      str = str.replace('b', '');
      no++;
    }
    if (str[i] === 'c') {
      str = str.replace('b', '');
      no++;
    }
  }
  if (no === 0) {
    return console.log(null);
  }
  return console.log(str);
};

removeABC('this might be a bit hard');
