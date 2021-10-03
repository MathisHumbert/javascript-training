function list(names) {
  let str = '';

  for (let i = 0; i < names.length; i++) {
    if (!names[i].name) return str;
    if (i === names.length - 1) {
      str += names[i].name;
    } else if (i === names.length - 2) {
      str += `${names[i].name} & `;
    } else {
      str += `${names[i].name}, `;
    }
  }
  return str;
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }]));
