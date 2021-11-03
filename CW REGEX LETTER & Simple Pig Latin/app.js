function pigIt(str) {
  //Code here
  const regex = /[a-zA-Z]/;

  return str
    .split(' ')
    .map((item) => {
      if (!regex.test(item)) return item;

      let x = item.slice(0, 1);
      item = item.slice(1, item.length);
      item += `${x}ay`;
      return item;
    })
    .join(' ');
}

// REGEX ONLY LETTERS

// String with some letters
const str = '12345hello6789!';

// Regular expression
const regex = /[a-zA-Z]/;

// Check if string contians letters
const doesItHaveLetter = regex.test(str);

console.log(doesItHaveLetter); // true
