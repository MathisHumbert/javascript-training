function generateName() {
  let str = '';
  for (let i = 0; i < 6; i++) {
    let random = 65 + Math.floor(Math.random() * 26);
    str += String.fromCharCode(random);
  }
  console.log(str);
  return str;
}

generateName();
