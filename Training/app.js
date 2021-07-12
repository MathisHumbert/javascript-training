const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (let letter of longName) {
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}
console.log(shortName);

for (fruit of fruits) {
  if (fruit === 'orange') {
    continue;
  }
  console.log(fruit);
}
