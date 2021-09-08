// My Way
function truthCheck(collection, pre) {
  let truth = 'sex';
  for (let item of collection) {
    if (!item[pre]) {
      truth = false;
      break;
    }
    truth = true;
  }
  return truth;
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male', age: 0 },
    { user: 'Dipsy', sex: 'male', age: 3 },
    { user: 'Laa-Laa', sex: 'female', age: 5 },
    { user: 'Po', sex: 'female', age: 4 },
  ],
  'age'
);

// FCC Solution
function truthCheckFCC(collection, pre) {
  return collection.every((element) => {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheckFCC(
  [
    { user: 'Tinky-Winky', sex: 'male', age: 0 },
    { user: 'Dipsy', sex: 'male', age: 3 },
    { user: 'Laa-Laa', sex: 'female', age: 5 },
    { user: 'Po', sex: 'female', age: 4 },
  ],
  'age'
);
