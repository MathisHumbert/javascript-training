const author = 'Some Author';
const statement = 'Some Statement';

const quote = hightLight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

const result = document.getElementById('result');
result.innerHTML = quote;

function hightLight(text, ...vars) {
  console.log(text, vars);
  const awesome = text.map((item, index) => {
    return `${item}<strong class="blue">${vars[index] || ''}</strong>`;
  });
  return awesome.join('');
}
