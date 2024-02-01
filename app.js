function sum(numbers) {
  "use Strict";
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function past(h, m, s) {
  h = 60;
  m = 60;
  s = 60;
  return h * m * s;
}

console.log(past(0, 1, 1));
