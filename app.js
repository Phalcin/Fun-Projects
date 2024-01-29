function doubleChar(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].repeat(3));
    // return str[i].repeat(2);
  }
}

console.log(doubleChar("Emma"));
