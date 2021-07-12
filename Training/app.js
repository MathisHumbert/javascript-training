const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const mathis = ['Mathis', 'Humbert', '22', 'Fuisse', 'Lisa'];

const [firstName, , , , gf] = mathis;
console.log(firstName, gf);

function test({ first, city }) {
  console.log(first, city);
}
test(bob);

let first = 'two';
let second = 'one';
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
