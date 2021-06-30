const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
});
