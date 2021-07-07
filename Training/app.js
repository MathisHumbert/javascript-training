// Closure
function newAccount(name, initalBalance) {
  let balance = initalBalance;
  function showBalance() {
    console.log(`Hey ${name} yout balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('john', 400);
const bob = newAccount('bob', 200);
john.deposit(400);

john.withdraw(1000);

bob.deposit(2000);
bob.withdraw(1000);
