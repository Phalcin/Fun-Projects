function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

const inputString = "3.25";
const result = isInvalidInput(inputString);

if (result) {
  console.log("invalid input");
} else {
  console.log("Valid input");
}
