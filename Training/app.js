const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, secon, ...fruit] = fruits;
console.log(fruit);

const person = {
  name: 'Mathis',
  lastName: 'Humbert',
  job: 'intern',
};

const { name } = person;
console.log(name);

const getAverage = (name, ...average) => {
  console.log(name);
  console.log(average);
  let total = 0;
  for (let number of average) {
    total += number;
  }
  console.log(`Hello ${name} your score is ${total / average.length}`);
};

const numbers = [20, 10, 30];
getAverage(name, ...numbers);
