const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let arr = [10, 20, 30];

let buttonNames = new Map();
buttonNames.set(btn1, 'Button 1');
buttonNames.set(btn2, 'Button 2');

for (let [btn, btnName] of buttonNames) {
  console.log(btn, btnName);
  btn.addEventListener('click', function () {
    console.log(btnName);
  });
}

for (let btnName of buttonNames.values()) {
  console.log(btnName);
}
for (let btn of buttonNames.keys()) {
  console.log(btn);
}

for (let [idx, val] of arr.entries()) {
  console.log(`${[idx]}: ${val}`);
}
