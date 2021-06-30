const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
// const heading = document.querySelector('.heading');

function sayHello() {
  console.log('hello');
}

btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside a container`;
  container.appendChild(element);
});

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    console.log('hello there');
  }
});
