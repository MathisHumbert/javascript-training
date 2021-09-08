// My Way + FCC
function addTogether() {
  const [first, second] = arguments;

  if (typeof first !== 'number') {
    return undefined;
  } else if (second === undefined) {
    function addSecond(second) {
      if (typeof second !== 'number') {
        return undefined;
      } else {
        return first + second;
      }
    }

    return addSecond;
  } else if (typeof second !== 'number') {
    return undefined;
  } else {
    return first + second;
  }
}

console.log(addTogether(2)(3));
console.log(addTogether(2, 3));

// FCC Solution
function addTogetherFCC() {
  const [first, second] = arguments;
  if (typeof first !== 'number') {
    return undefined;
  }
  if (second === undefined) {
    return (second) => addTogether(first, second);
  }
  if (typeof second !== 'number') {
    return undefined;
  }
  return first + second;
}
console.log(addTogetherFCC(2)(3));
console.log(addTogetherFCC(2, 3));
