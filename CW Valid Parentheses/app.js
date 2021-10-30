// My Solution
function validParentheses(parens) {
  let arr = [];

  for (let i of parens) {
    if (i === '(') arr.push('(');
    else if (i === ')') {
      if (arr.includes('(')) arr.pop();
      else return false;
    } else return false;
  }

  if (arr.length !== 0) return false;
  return true;
}

// Codewar user solution
function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}
