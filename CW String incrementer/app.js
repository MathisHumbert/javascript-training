function incrementString(strng) {
  strng = strng.split('');
  for (let i = strng.length - 1; i >= 0; i--) {
    if (strng[i] < 9) {
      strng[i] = parseInt(strng[i]) + 1;
      return strng.join('');
    } else if (parseInt(strng[i]) == strng[i]) {
      strng[i] = 0;
    } else {
      strng.push(1);
      return strng.join('');
    }
  }
}

console.log(incrementString('foobar000'));
