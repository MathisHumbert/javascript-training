function mutation(arr) {
  let newArr = arr[0].toLowerCase();
  let value = arr[1].toLowerCase();
  let test;

  for (let i = 0; i < value.length; i++) {
    test = false;
    for (let j = 0; j < newArr.length; j++) {
      if (value[i] === newArr[j]) {
        test = true;
      }
    }
    if (!test) {
      return console.log(false);
    }
  }
  return console.log(true);
}

mutation(['Alien', 'line']);
