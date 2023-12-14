let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const huxn = Object.create(person);

huxn.firstName = 'Huxn';
huxn.lastName = 'Webdev';
huxn.greet();
