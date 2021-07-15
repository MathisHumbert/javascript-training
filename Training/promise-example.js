const heanding1 = document.querySelector('.one');
const heanding2 = document.querySelector('.two');
const heanding3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve(`hey value is true`);
  } else {
    reject(`there was a error, value is false`);
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
