function findOdd(A) {
  let memoryArr = [];

  A.filter((item) => {
    if (!memoryArr.includes(item)) memoryArr.push(item);
    else memoryArr.splice(memoryArr.indexOf(item), 1);
  });

  return memoryArr[0];
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
