function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  };
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

console.log(john);
console.log(bob);
