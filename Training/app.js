const heanding1 = document.querySelector('.one');
const heanding2 = document.querySelector('.two');
const heanding3 = document.querySelector('.three');

const container = document.querySelector('.img-container');
const btn = document.querySelector('.btn');

const url = 'https://source.unsplash.com/random';

btn.addEventListener('click', () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((data) => console.log(data));
});

function loadImage(url) {
  // return new Promise((resolve, reject)=>{})
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from the source : ${url}`));
    });
    img.src = url;
  });
  return promise;
}
