const person = {
  name: 'Emmanuel',
  age: 20,
  greetRegular: function () {
    console.log(`Hello my name is ${this.name} & I'm ${this.age} years old`);
  },
  greetArrow: () => {
    console.log(`Hello my name is ${this.name} & I'm ${this.age} years old`);
  },
};

console.log(person.greetRegular(), person.greetArrow());
