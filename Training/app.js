let result = Number(prompt('Enter passcode'));
if (Number.isNaN(result)) {
  console.log('you must enter a number');
} else {
  console.log(`Your number is the square root of ${result * result}`);
}
