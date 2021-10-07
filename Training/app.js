const btn = document.querySelector('.btn');
const url = './api/people.json';
btn.addEventListener('click', () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displaydDtat = data.map((item) => {
        return `<p>${item.name}</p>`;
      });
      const element = document.createElement('div');
      element.innerHTML = displaydDtat.join('');
      document.body.appendChild(element);
    } else {
      console.log({ status: xhr.status, text: xhr.statusText });
    }
  };
  xhr.send();
}
