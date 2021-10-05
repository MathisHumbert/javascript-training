function highestRank(arr) {
  // passing all of the numbers and their frequency into an array
  let allNumbers = [];
  for (let num of arr) {
    if (allNumbers.some((item) => item[0] === num)) {
      allNumbers.forEach((item) => {
        if (item[0] === num) {
          item[1] += 1;
        }
      });
    } else {
      allNumbers.push([num, 1]);
    }
  }

  // getting the result
  let acc = 0;
  let value = 0;
  allNumbers.forEach((item) => {
    if (item[1] > acc) {
      acc = item[1];
      value = item[0];
    }
    if (item[1] === acc && item[0] > value) {
      value = item[0];
    }
  });

  return value;
}

highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);
