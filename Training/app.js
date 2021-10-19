// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;

//   return newUser;
// }

// const userFunctionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login() {
//     console.log("You're loggedin");
//   },
// };

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};
UserCreator.prototype.login = function () {
  console.log('login');
};

const user1 = new UserCreator('Eva', 9);
console.log(user1);
user1.increment();
console.log(user1);
