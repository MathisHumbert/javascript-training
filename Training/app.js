function sumPairs(ints, s) {
  let solutionsArr;
  let lastIndex = ints.length;

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        if (j <= lastIndex) {
          lastIndex = j;
          solutionsArr = [ints[i], ints[j]];
        }
      }
    }
  }

  return solutionsArr;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
