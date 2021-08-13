let result;

do {
  result = Number(prompt('Enter a number'));
} while (Number.isNaN(result));

console.log(`Your number is the square root of ${result * result}`);
