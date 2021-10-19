// Solution 2
function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

userFunctions = {
  sayName: function () {
    console.log(`I'm ${this.name}`);
  },
  increment: function () {
    this.score++;
  },
};

const user1 = userCreator('Phil', 5);
user1.sayName();

function paidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++;
  },
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator('Alyssa', 8, 25);

// Call
const obj = {
  num: 3,
  increment: function () {
    this.num++;
  },
};

const otherObj = { num: 10 };
obj.increment();
console.log(obj);
obj.increment.call(otherObj);
console.log(otherObj);
