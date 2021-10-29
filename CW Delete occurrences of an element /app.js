// My Solution
function deleteNth(arr, n) {
  let obj = {};
  return arr.reduce((acc, curr) => {
    if (obj.hasOwnProperty(curr)) {
      if (obj[curr] !== n) {
        obj[curr]++;
        acc.push(curr);
      }
    } else {
      obj[curr] = 1;
      acc.push(curr);
    }
    return acc;
  }, []);
}

// Codewar user solution
function deleteNth(arr, n) {
  let cache = {};
  return arr.filter((x) => {
    cache[x] = (cache[x] || 0) + 1;
    return cache[x] <= n;
  });
}
