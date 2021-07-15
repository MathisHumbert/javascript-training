const heanding1 = document.querySelector('.one');
const heanding2 = document.querySelector('.two');
const heanding3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    heanding1.style.color = 'red';
    setTimeout(() => {
      heanding2.style.color = 'green';
      setTimeout(() => {
        heanding3.style.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);
});

console.log(`I'm second`);
