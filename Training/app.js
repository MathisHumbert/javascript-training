const sayHi = () => console.log('hi');

const double = (num) => num * 2;

const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

// return object
const object = () => ({ name: 'john', age: 22 });

// arrow function as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});
console.log(big);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('you clicked me'));
