// My Way
function binaryAgent(str) {
  function binToDec(bstr) {
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
  }

  let allWords = '';
  str = str.split(' ');
  for (let item of str) {
    let word = String.fromCharCode(binToDec(item));
    allWords += word;
  }
  console.log(allWords);

  return allWords;
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);

// FCC Solution
function binaryAgentFCC(str) {
  let biString = str.split(' ');
  let unitString = [];

  for (let i = 0; i < biString.length; i++) {
    unitString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return unitString.join('');
}

console.log(
  binaryAgentFCC(
    '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
  )
);
