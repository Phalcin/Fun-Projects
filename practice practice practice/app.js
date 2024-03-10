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

// const person = {
//   age: 20,
//   name: "Emmanuel",
//   others: ["well", "well", 3, 4, 5],
// };

// function emma({ age, name, others: [one, two] }) {
//   return `My name is ${name}, I am ${age} years old, other things like ${one} ${two}`;
// }

// console.log(emma(person));

const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "just like you", singer: "NF", duration: 3.23 },
  { name: "Humble", singer: "Kendrick", duration: 2.33 },
];

const [, , { singer: s }] = songs;
console.log(s);
