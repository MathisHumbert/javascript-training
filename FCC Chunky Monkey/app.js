// My way
function chunkArrayInGroups(arr, size) {
  let value = Math.ceil(arr.length / size);
  let j = 0;
  let end = size;
  let newArr = [];
  for (let i = 0; i < value; i++) {
    newArr.push(arr.slice(j, end));
    j += size;
    end += size;
  }
  return newArr;
}

// easier way that i found on FCC forum
// function chunkArrayInGroups(arr, size) {
// Break it up.
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
