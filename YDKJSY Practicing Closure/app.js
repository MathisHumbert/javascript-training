// This is my solution for YDKJSY practice

function range(start, end) {
  if (end == undefined) {
    return function getEnd(end) {
      return getRange(start, end);
    };
  } else return getRange(start, end);

  function getRange(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
}

console.log(range(3, 10));
let start3 = range(1);
console.log(start3(10));
