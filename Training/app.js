function zero() {
  return 0;
}
function one() {
  return 1;
}
function two() {
  return 2;
}
function three() {
  return 3;
}
function four() {
  return 4;
}
function five() {
  return 5;
}
function six() {
  return 6;
}
function seven(num) {
  if (num) {
    console.log(num);
  } else {
    return 7;
  }
}
function eight(num) {
  return 8;
}
function nine() {
  return 9;
}

function plus() {}
function minus() {}
function times() {}
function dividedBy(num) {
  return ['/', num];
}

console.log(eight(dividedBy(seven())));

// faire la meme fonction de la 7 sur toutes et return selon l'array recu
