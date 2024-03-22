const paragraphs = [
  "Wonder is a fascinating individual, and we often playfully refer to him as an AI because of his remarkable intellect and problem-solving abilities. Despite attending school at Aamusted, Wonder seems to possess an almost encyclopedic knowledge about a wide range of topics, often leaving us in awe of his capabilities. He's not just academically gifted; Wonder is also a great friend, always ready to lend a helping hand or offer valuable insights. His presence adds a unique and enriching dimension to our group, making every interaction with him an enlightening experience.",
  "Wonder's curiosity knows no bounds, and he approaches every challenge with a blend of analytical thinking and creativity. Whether it's a complex programming problem or a philosophical debate, Wonder always brings a fresh perspective that sparks engaging discussions. His ability to simplify complex concepts makes him an excellent teacher, and we often find ourselves learning something new from him.",
  "Despite his AI nickname, Wonder is incredibly empathetic and caring. He has a knack for understanding people's emotions and offering support when needed. His kindness and warmth create a welcoming atmosphere, and he's someone we can always rely on for advice or a listening ear.",
  "Wonder's dedication to his studies is truly admirable. Despite the challenges of his academic workload, he always manages to maintain a positive attitude and a strong work ethic. His commitment to learning motivates those around him to strive for excellence, and he serves as a role model for balancing academics with personal growth. Wonder's determination to succeed is inspiring, and we have no doubt that he will achieve great things in the future.",
  "Wonder's sense of humor is as sharp as his intellect, often catching us off guard with clever puns and witty remarks. He has a knack for finding humor in everyday situations, making even the most mundane tasks enjoyable. Wonder's lightheartedness brings a sense of joy to our group, and his laughter is contagious. Despite his AI moniker, Wonder is very much human, and his humor is just one of the many qualities that make him such a cherished friend.",
];

const pg = document.querySelector("#pg");
const userInput = document.querySelector(".textinput");
const resetBtn = document.querySelector(".containerin button");
const totalTime = document.querySelector(".time span");
const totalWpm = document.querySelector(".wpm span");
const totalMistake = document.querySelector(".mistake span");
const totalCpm = document.querySelector(".cpm span");

let timer;
let maxTime = 60;
let timeRemaining = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = 0;

const setParagraph = () => {
  const randIndex = Math.floor(Math.random() * paragraphs.length);
  pg.innerText = "";
  paragraphs[randIndex].split("").forEach((char) => {
    pg.innerHTML += `<span>${char}</span>`;
  });
  pg.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => userInput.focus());
  pg.addEventListener("click", () => userInput.focus());

  totalMistake.innerText = 0;
  totalCpm.innerText = 0;
  totalWpm.innerText = 0;
  totalTime.innerText = timeRemaining;
};
const startTyping = () => {
  let characters = pg.querySelectorAll("span");
  // console.log(characters);
  //the
  //you
  let typedChar = userInput.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeRemaining > 0) {
    if (!isTyping) {
      // 0 or false
      timer = setInterval(startTimer, 1000);
      isTyping = true;
    }

    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("incorrect", "correct");
      }
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        characters[charIndex].classList.add("incorrect");
        mistakes++;
      }
      charIndex++;
    }

    characters.forEach((char) => {
      char.classList.remove("active");
    });
    characters[charIndex].classList.add("active");

    // WPM is calculated by dividing the number of characters typed correctly (charIndex - mistakes) by 5 (the average number of characters per word) and dividing that result by the time it took to type those words (maxTime - timeRemaining), and then multiplying the result by 60 to convert to minutes.

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeRemaining)) * 60,
    );
    wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm;
    totalWpm.innerText = wpm;
    totalMistake.innerText = mistakes;
    totalCpm.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    isTyping = false;
  }
};
const startTimer = () => {
  if (timeRemaining > 0) {
    timeRemaining--;
    totalTime.innerText = timeRemaining;
    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeRemaining)) * 60,
    );
    totalWpm.innerHTMl = wpm;
  } else {
    clearInterval(timer);
    isTyping = false;
  }
};

// const startTyping = () => {
//   let characters = pg.querySelectorAll("span");
//   console.log(characters);
//   let typedChar = userInput.value.split("")[charIndex];
//   if (charIndex < characters.length - 1 && timeRemaining > 0) {
//     if (!isTyping) {
//       // 0 or false
//       timer = setInterval(startTimer, 1000);
//       isTyping = true;
//     }
//   }
//   if (typedChar == null) {
//     if (charIndex > 0) {
//       charIndex--;
//       if (characters[charIndex].contains("incorrect")) {
//         mistakes--;
//       }
//       characters[charIndex].classList.remove("incorrect", "correct");
//     } else {
//       if (characters[charIndex].innerText == typedChar) {
//         characters[charIndex].classList.add = "correct";
//       } else {
//         characters[charIndex].classList.add = "incorrect";
//         mistakes++;
//       }
//       charIndex++;
//     }
//     characters.forEach((char) => {
//       char.classList.remove("active");
//     });
//     characters[charIndex].classList.add("active");

//     // wpm
//     let wpm = Math.round(
//       ((charIndex - mistakes) / 5 / (maxTime - timeRemaining)) * 60,
//     );
//     wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm;
//     totalWpm.innerText = wpm;
//     totalMistake.innerText = mistakes;
//     totalCpm.innerText = charIndex - mistakes;
//   } else {
//     clearInterval(timer);
//     isTyping = false;
//   }
// };
// const startTimer = () => {
//   if (timeRemaining > 0) {
//     timeRemaining--;
//     totalTime.innerText = timeRemaining;
//     let wpm = Math.round(
//       ((charIndex - mistakes) / 5 / (maxTime - timeRemaining)) * 60,
//     );
//     totalWpm.innerHTML = wpm;
//   } else {
//     clearInterval(timer);
//     isTyping = false;
//   }
// };
const resetGame = () => {
  setParagraph();
  clearInterval(timer);
  timeRemaining = maxTime;
  charIndex = 0;
  mistakes = 0;
  isTyping = 0;
  userInput.value = "";
  totalTime.innerText = timeRemaining;
  totalWpm.innerText = 0;
  totalMistake.innerText = 0;
  totalCpm.innerText = 0;
};
setParagraph();
resetBtn.addEventListener("click", resetGame);
userInput.addEventListener("input", startTyping);
