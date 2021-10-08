function countSheeps(arrayOfSheep) {
  let acc = 0;
  arrayOfSheep.forEach((sheep) => (sheep === true ? acc++ : ''));
  return acc;
}

function countSheeps(arrayOfSheeps) {
  console.log(arrayOfSheeps.filter(Boolean).length);
}

countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);
