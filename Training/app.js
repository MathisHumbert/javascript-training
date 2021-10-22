function printHello() {
  console.log('Hello');
}

function blockFor1Sec() {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}

setTimeout(printHello, 0);

blockFor1Sec();

console.log('Me First');
