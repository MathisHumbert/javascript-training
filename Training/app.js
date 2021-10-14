function createPerson(firstName, lastName) {
  let publicAPI = {
    firstName,
    lastName,
    fullName: function () {
      console.log(`My name is ${this.firstName} ${this.lastName}`);
    },
  };
  return publicAPI;
}

let person = createPerson('Mathis', 'Humbert');
person.fullName();
let person2 = createPerson('Lisa', 'Mora');
person2.fullName();
