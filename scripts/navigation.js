const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation__links-wrapper');
const illustration = document.querySelector('.first__content--illustration');
const backdrops = document.querySelector('.first');
const navDrop = document.querySelector('.navigation');
const secondBackdrop = document.querySelector('.first__info');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  illustration.classList.toggle('active');
  navDrop.classList.toggle('active');
  backdrops.classList.toggle('active');
  secondBackdrop.classList.toggle('active');
});
