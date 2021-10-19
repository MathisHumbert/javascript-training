function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login() {
    console.log("You're loggedin");
  },
};

const user1 = userCreator('Phil', 4);
const user2 = userCreator('Julie', 5);

user1.increment();
console.log(user1);
user2.login();
