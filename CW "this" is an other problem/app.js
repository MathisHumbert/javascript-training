class NamedOne {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get firstName() {
    return this.first;
  }

  set firstName(value) {
    this.first = value;
  }

  get lastName() {
    return this.last;
  }

  set lastName(value) {
    this.last = value;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(value) {
    console.log(value.split(' '));
    if (value.split(' ').length !== 2) return console.log('no');
    else {
      this.first = value.split(' ')[0];
      this.last = value.split(' ')[1];
    }
  }
}
var namedOne = new NamedOne('Naomi', 'Wang');

console.log(namedOne.firstName);
namedOne.firstName = 'Mathis';
console.log(namedOne.firstName);

console.log(namedOne.lastName);
namedOne.lastName = 'Humbert';
console.log(namedOne.lastName);

console.log(namedOne.fullName);
namedOne.fullName = 'Lisa Mora';
console.log(namedOne.fullName);
