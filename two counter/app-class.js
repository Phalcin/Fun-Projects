function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`,
  );
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");

    this.increase = this.increase.bind(this);
    this.increaseBtn.addEventListener("click", this.increase);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
