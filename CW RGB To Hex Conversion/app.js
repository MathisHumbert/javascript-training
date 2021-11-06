// My solution
function rgb(r, g, b) {
  let final = [r, g, b];
  return final
    .map((item) => {
      if (item < 0) item = 0;
      if (item > 255) item = 255;

      let strItem = '';
      let first = item / 16;
      let second = item % 16;

      strItem += returnRGB(first, strItem);
      strItem += returnRGB(second, strItem);

      return strItem;
    })
    .join('');
}

function returnRGB(num, str) {
  console.log(num);
  if (num < 10) {
    str = Math.floor(num);
    return str;
  } else {
    str = String.fromCharCode(Math.floor(num) + 55);
    return str;
  }
}

// Codewar user solution
function rgb2(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) return '00';
  if (d > 255) return 'FF';
  return (hex = ('0' + Number(d).toString(16)).slice(-2).toUpperCase());
}
