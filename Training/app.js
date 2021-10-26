// Challenge 3
const isOdd = (num) => num % 2 === 1;

const numSelectString = (numArr) => {
  return numArr
    .filter((num) => isOdd(num))
    .sort((a, b) => a - b)
    .join(', ');
};

//const nums = [17, 34, 3, 12];
//console.log(numSelectString(nums)); // should log "3, 17"
