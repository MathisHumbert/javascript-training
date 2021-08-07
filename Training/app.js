function repeatStringNumTimes(str, num) {
  let stringRepeated = [];
  if (num < 0) {
    stringRepeated.push('');
    return stringRepeated;
  }
  for (let i = 0; i < num; i++) {
    stringRepeated.push(str);
  }
  stringRepeated = stringRepeated.join('');
  return stringRepeated;
}

repeatStringNumTimes('abc', -2);
console.log(repeatStringNumTimes('abc', -2));
