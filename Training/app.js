function reverseString(str) {
  let newArr = [];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i]);
  }
  for (let i = 0; i < newArr.length; i++) {
    let actualWord = newArr[i];
    arr.unshift(actualWord);
  }
  str = arr.join('');
  return str;
}

console.log(reverseString('hello'));
