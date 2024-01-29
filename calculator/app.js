const myCalculator = document.querySelector(".myCal");
const myKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];
const myOper = ["+", "-", "*", "/"];
let myOutput;
document.addEventListener("DOMContentLoaded", () => {
  myOutput = document.createElement("div");
  myOutput.textContent = "0";
  myOutput.classList.add("output");
  myCalculator.appendChild(myOutput);
  let btns;
  myKeys.forEach((key) => {
    let div = document.createElement("div");
    div.classList.add("row");
    key.forEach((inKeys) => {
      let btn = document.createElement("div");
      btn.innerHTML = inKeys;
      btn.classList.add("btn");
      btn.addEventListener("click", btnHit);
      div.appendChild(btn);
    });
    myCalculator.appendChild(div);
  });
});

function btnHit(e) {
  console.log(this.innerText);
  let myValue = this.innerText;
  let myCal = myOutput.innerText;
  if (myCal == "0") {
    myCal = "";
  }
  let lastChar = myCal.slice(-1);
  console.log(lastChar);
  if (myOper.includes(myValue)) {
    if (myOper.includes(lastChar)) {
      myCal = myCal.slice(0, -1);
    } else {
      myCal = eval(myCal);
    }
  }

  myCal += myValue;
  myOutput.innerText = myCal;
}
