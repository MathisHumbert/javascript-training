const back = document.querySelector('#result');
console.log(back);
back.style.backgroundColor = 'blue';

const items = document.querySelectorAll('.special');
items.forEach((item) => (item.style.color = 'red'));
const lastItem = document.querySelector('.last');
lastItem.style.color = 'yellow';
