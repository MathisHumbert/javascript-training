const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../api/simple.txt');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        satuts: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}
