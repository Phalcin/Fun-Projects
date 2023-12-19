let progress = document.querySelector('.scroll-indicator .progress');
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', scroll);

function scroll() {
  let scrollTop = document.createElement.scrollTop;
  let scrolled = (scrollHeight / scrollTop) * 100;

  console.log(scrolled);
  progress.style.width = `${scrolled}%`;
}
