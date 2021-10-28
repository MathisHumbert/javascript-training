// My Solution
function stockList(listOfArt, listOfCat) {
  let obj = listOfCat.reduce((acc, curr) => {
    acc[curr[0]] = 0;
    return acc;
  }, {});

  obj = listOfArt.reduce((acc, curr) => {
    if (listOfCat.includes(curr[0])) {
      acc[curr[0]] += parseInt(curr.split(' ')[1]);
    }
    return acc;
  }, obj);

  let final = [];
  let testEmpty = 0;
  for (let item in obj) {
    final.push(`(${item} : ${obj[item]})`);
    testEmpty += obj[item];
  }
  if (testEmpty === 0) return '';
  return final.join(' - ');
}

// Codewar user solution
function stockList2(listOfArt, listOfCat) {
  var qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function (art) {
    var cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });

  return listOfCat
    .map(function (c) {
      return '(' + c + ' : ' + (qs[c] | 0) + ')';
    })
    .join(' - ');
}
