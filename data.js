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

"use strict";

let firstName = "John";
let lastName = "May";

const john = {
  firstName: "John",
  lastName: "anderson",
  fullName: () => {
    return `My full name is ${this.firstName} ${this.lastName}`;
  },
};

console.log(john);
console.log(john.fullName());
