let arr = ['apple', 'pear', 'grapes'];

const fruitSalad = (arr) => {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let wordLenght = arr[i].length / 2;
    let partOne = arr[i].substr(0, wordLenght);
    let partTwo = arr[i].substr(wordLenght, wordLenght * 2);
    finalArr.push(partOne);
    finalArr.push(partTwo);
  }
  return console.log(finalArr.sort().join(''));
};

fruitSalad(['banana']);
