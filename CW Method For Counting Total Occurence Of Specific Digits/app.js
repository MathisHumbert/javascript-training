class List {
  constructor() {}

  countSpecDigits(integersList, digitsList) {
    let numPresent = [];

    for (let num of integersList) {
      let numArr = [...num.toString()];
      numArr.forEach((num) => {
        if ((num, digitsList.includes(parseInt(num))))
          numPresent.push(parseInt(num));
      });
    }

    let finalList = digitsList.map((digit) => [digit, 0]);
    numPresent.forEach((num) => {
      finalList[digitsList.indexOf(num)][1] += 1;
    });

    return finalList;
  }
}

l = new List();
console.log(l.countSpecDigits([-18, -31, 81, -19, 111, -888], [1, 8, 4]));
