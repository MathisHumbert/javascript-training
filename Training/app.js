// function createFlow(array) {
//   let i = 0;
//   const inner = {
//     next: function () {
//       const element = array[i];
//       i++;
//       return element;
//     },
//   };
//   return inner;
// }

// const returnNextElement = createFlow([4, 5, 6]);
// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next();
// console.log(element1, element2);

// generator function
// function* createFlow() {
//   yield 4;
//   yield 5;
//   yield 6;
// }

// const returnNextElement = createFlow();
// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next();

// function* createFlow() {
//   const num = 10;
//   const newNum = yield num;
//   yield 5 + newNum;
//   yield 6;
// }

// const returnNextElement = createFlow();
// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next(2);
// const element3 = returnNextElement.next();
// console.log(element1, element2);

function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch('url');
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
