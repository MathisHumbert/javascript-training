import { random, people } from './utils/data.js';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  showPeople();
});

const showPeople = () => {
  const newPoeple = people
    .map((item) => {
      const { name, job } = item;
      return `<p>${name}<strong>${job}</strong></p>`;
    })
    .join('');
  container.innerHTML = newPoeple;
};

console.log(random);
