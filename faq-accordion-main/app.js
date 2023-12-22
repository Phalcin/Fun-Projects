const plus = document.querySelectorAll('.icon__plus');
const minus = document.querySelectorAll('.icon__minus');
const content = document.querySelectorAll('.item__content');

const showContent = () => {
  plus.forEach((plus, index) => {
    plus.addEventListener('click', () => {
      let showContent = content[index].classList.add('item__content--show');
      let showMinus = minus[index].classList.add('icon__minus--show');
    });
  });
};

showContent();
