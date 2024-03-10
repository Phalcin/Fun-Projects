// const intervalId = setInterval(() => {
//   console.log("well this will run for quite a while");
// }, 2000);

// setTimeout(function () {
//   clearInterval(intervalId);
//   console.log(`interval stopped`);
// }, 3000);

// const foo = ["one", "two"];

// const [red, yellow] = foo;
// console.log(red, yellow);

// function f() {
//   return [1, 2];
// }

// let [c, d] = f();
// console.log(c, d);

// const [a, ...b] = ["one", "two", "three"];
// console.log(a, b);

const colors = ["red", "green", "blue", "yellow", "orange"];

const [one, two, three] = colors;
console.log(one, two, three);

const person = {
  name: "john Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

const { name, age, country } = person;
console.log(name, age, country);
