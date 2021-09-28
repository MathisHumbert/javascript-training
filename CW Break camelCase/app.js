function solution(string) {
  let str = string.split('');
  let newStr = [];
  let regex = new RegExp(/^[A-Z]/);

  for (let word of str) {
    if (regex.test(word)) newStr.push(' ');

    newStr.push(word);
  }

  return newStr.join('');
}

solution('camelCasing');
