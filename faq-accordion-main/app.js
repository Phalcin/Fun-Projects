const plus = document.querySelectorAll('.icon__plus');
const minus = document.querySelectorAll('.icon__minus');
const content = document.querySelectorAll('.item__content');

const showContent = () => {
  plus.forEach((pl, index) => {
    pl.addEventListener('click', () => {
      let itemShow = content[index];
      let showContent = itemShow.classList.toggle('item__content--show');
      if (showContent) {
        pl.classList.toggle('icon__plus--hide');
      }
    });
  });
  minus.forEach((min, index) => {
    min.addEventListener('click', () => {
      let itemHide = content[index];
      itemHide.classList.remove('item__content--show');

      plus[index].classList.remove('icon__plus--hide');
    });
  });
};

showContent();
