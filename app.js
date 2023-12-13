// window.firstName = 'Emmanuel';
// this.lastName = 'Mensah';
// console.log(window);

// function printThis() {
//   return this;
// }

// const res = printThis();
// console.log(res);

const obj = {
  firstName: 'Huxn',
  lastName: 'Webdev',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const res = obj.fullName();
console.log(res);

const obj = {
  firstName: 'Huxn',
  lastName: 'Webdev',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const res = obj.fullName();
console.log(res);
