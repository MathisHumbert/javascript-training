// My Way
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);

// FCC solution
function whatIsInANameFCC(collection, source) {
  let keys = Object.keys(source);
  return collection.filter((obj) => {
    return keys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(
  whatIsInANameFCC(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
