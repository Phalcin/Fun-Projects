const url = "./people.json";
const response = fetch(url);
console.log(response);

// fetch(url)
//   .then((response) => {
//     // response object
//     // useful prop and methods
//     // convert response into JSON data
//     // returns promise
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

const btn = document.querySelector(".btn");
btn.addEventListener("click", async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayItems(data);
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
