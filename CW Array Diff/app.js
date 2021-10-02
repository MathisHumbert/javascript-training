function arrayDiff(a, b) {
  let newArr = [];
  a.forEach((item) => {
    if (!b.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

arrayDiff([1, 2, 3], [1, 2]);
