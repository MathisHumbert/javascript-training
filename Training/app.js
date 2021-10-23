// iterators
const numbers = [4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

function createNewFunction() {
  function add2(num) {
    return num + 2;
  }
  return add2;
}

const newFunction = createNewFunction();
const result = newFunction(3);
console.log(result);

function createFunction(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

returnNextElement = createFunction([4, 5, 6]);
const element1 = returnNextElement();
const element2 = returnNextElement();
