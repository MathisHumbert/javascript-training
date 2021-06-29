const result = document.querySelector('.result');
const h2 = document.querySelector('.red');
const bodyDiv = document.createElement('div');
const bodyText = document.createTextNode('hello body');
bodyDiv.appendChild(bodyText);
document.body.insertBefore(bodyDiv, result);

const heading = document.createElement('h2');
const text = document.createTextNode('je suis un h2');
heading.appendChild(text);
heading.classList.add('blue');
result.insertBefore(heading, h2);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('je suis tout petit');
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
