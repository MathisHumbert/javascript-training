function confirmEnding(str, target) {
  let lastpart = str.substring(str.length - target.length, str.length);
  if (lastpart === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding('Connor', 'n'));
