// My way with some help of FCC
function myReplace(str, before, after) {
  const firstWord = str.indexOf(before);
  if (/^[A-Z]/.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(
  myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped')
);
