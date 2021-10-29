function expandedForm(num) {
  let numSplit = num.toString().split('.');

  let firstPart = numSplit[0]
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');

  if (numSplit[1] === undefined) return firstPart;

  let secondPart = numSplit[1]
    .split('')
    .map((a, i) => a + '/' + Math.pow(10, i + 1))
    .filter((a) => a[0] > 0)
    .join(' + ');

  return `${firstPart.length === 0 ? '' : `${firstPart} + `}${secondPart}`;
}
