const person = {
  name: "John",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
};

console.log(person.job.company.name);
