// Challenge 6
const curriedAddTwoNumsToFive = (num1) => {
  const starterNum = 5;

  return (num2) => {
    return num1 + num2 + starterNum;
  };
};

console.log(curriedAddTwoNumsToFive(6)(7)); // should log 18
