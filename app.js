const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const container = document.querySelector(".img-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  await addColor(1000, heading1, "red");
  await addColor(1000, heading2, "green");
  await addColor(1000, heading3, "blue");
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
