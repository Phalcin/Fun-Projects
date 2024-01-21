// // Javascript classes

// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     return (this.crust = pizzaCrust);
//   }
// }

// // class SpecialtyPizza extends Pizza {
// //   constructor(pizzaSize) {
// //     super(pizzaSize);
// //     this.type = "The Works";
// //   }
// //   slice() {
// //     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
// //   }
// // }

// // const specialty = new SpecialtyPizza("medium");
// // specialty.slice();

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "Chase";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

john.deposit(300);
john.deposit(100);

console.log(john);
console.log(bob);
