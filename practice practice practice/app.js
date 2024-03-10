const panels = document.querySelectorAll(".panel");
const header = document.querySelector("h3");
const container = document.querySelectorAll(".container");

// for (let i = 0; i < panel.length; i++) {
//   let currentImg = panel[i];
//   currentImg.addEventListener("click", () => {
//     if (currentImg.classList.contains("active")) {
//       currentImg.classList.remove("active");
//     } else {
//       currentImg.classList.toggle("active");
//     }
//   });
// }

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.toggle("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
