let uniqueInOrder = function (iterable) {
  let stockArr = [];
  let lastItem = '';

  for (let i = 0; i < iterable.length; i++) {
    if (stockArr.includes(iterable[i]) && lastItem == iterable[i]);
    else {
      lastItem = iterable[i];
      stockArr.push(iterable[i]);
    }
  }

  return stockArr;
};

uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder('ABBCcAD');
