function firstNonRepeatingLetter(s) {
  let sArr = s.split('');
  const arr = [];
  const memoryArr = [];
  sArr.forEach((l) => {
    if (
      arr.includes(l) ||
      arr.includes(l.toLowerCase()) ||
      arr.includes(l.toUpperCase())
    ) {
      const index =
        arr.indexOf(l) === -1
          ? arr.indexOf(l.toLowerCase()) === -1
            ? arr.indexOf(l.toUpperCase())
            : arr.indexOf(l.toLowerCase())
          : arr.indexOf(l);
      arr.splice(index, 1);
    } else if (
      !memoryArr.includes(l) &&
      !memoryArr.includes(l.toLowerCase()) &&
      !memoryArr.includes(l.toUpperCase())
    ) {
      arr.push(l);
      memoryArr.push(l);
    }
  });

  return arr[0] || '';
}

console.log(firstNonRepeatingLetter('sss'));
