const intervalId = setInterval(() => {
  console.log("well this will run for quite a while");
}, 2000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log(`interval stopped`);
}, 3000);
