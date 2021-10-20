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
// const obj = {
//   num: 3,
//   increment: function () {
//     this.num++;
//   },
// };

// const otherObj = { num: 10 };
// obj.increment();
// console.log(obj);
// obj.increment.call(otherObj);
// console.log(otherObj);

// Solution 3
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.sayName = function () {
  console.log(`I'm ${this.name}`);
};

userCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new userCreator('Phil', 5);
const user2 = new userCreator('Tim', 4);
user1.sayName();

function paidUserCreator(paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore);
  this.accountBalance = accountBalance;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increaseBalance = function () {
  this.accountBalance++;
};

const paidUser1 = new paidUserCreator('Alyysa', 8, 25);

paidUser1.increaseBalance();
console.log(paidUser1.accountBalance);
paidUser1.sayName();

// Solution 4
class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  sayName() {
    console.log(`I'm ${this.name}`);
  }
  increment() {
    this.score++;
  }
}

const user1 = new userCreator('Phil', 4);
const user2 = new userCreator('Tim', 4);
user1.sayName();

class paidUserCreatro extends userCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }

  increaseBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new paidUserCreatro('Alyssa', 8, 25);

paidUser1.increaseBalance();
paidUser1.sayName();
console.log(paidUser1);
