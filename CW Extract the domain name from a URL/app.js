// My solution
function domainName(url) {
  //your code here
  url = url.split('/');
  if (url[0].includes('http')) url = url[2];
  else url = url.join('');

  url = url.split('.');
  if (url[0] === 'www') return url[1];
  else return url[0];
}

// Codewar user solution
function domainName(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');

  return url.split('.')[0];
}
