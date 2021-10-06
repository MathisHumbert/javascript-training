// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min

boilWater(0);
console.log('chop carrots');
for (let i = 0; i < 1000; i++) {
  console.log('still busy');
}

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done');
  }, time);
}
