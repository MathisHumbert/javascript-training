// My Way
function convertHTML(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '&') {
      str[i] = '&amp;';
    }
    if (str[i] == '<') {
      str[i] = '&lt;';
    }
    if (str[i] == '>') {
      str[i] = '&gt;';
    }
    if (str[i] == '"') {
      str[i] = '&quot;';
    }
    if (str[i] == "'") {
      str[i] = '&apos;';
    }
  }
  return str.join('');
}

console.log(convertHTML('Stuff in "quotation marks"'));

// FCC Solution

function convertHTMLFCC(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  return str
    .split('')
    .map((entity) => htmlEntities[entity] || entity)
    .join('');
}
console.log(convertHTMLFCC('Dolce & Gabbana'));
