//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  console.log(question);
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    question;
  });
});

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });