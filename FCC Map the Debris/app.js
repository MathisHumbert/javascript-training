// My Way and FCC Solution
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];

  let getOrbPeriod = function (obj) {
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    let orbPeriod = Math.round(a * b);

    return { name: obj.name, orbitalPeriod: orbPeriod };
  };

  for (let item of arr) {
    newArr.push(getOrbPeriod(item));
  }
  return newArr;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
