const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

function showThis() {
  console.log(this);
}

const emma = {
  name: "emma",
  showThis: showThis,
};

emma.showThis();

button1.addEventListener("click", showThis);
