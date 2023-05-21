let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
  isEnabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener("animationend", function () {
    this.classList.remove('active', direction);
  });
}
function showSlide(direction) {
  slides[currentSlide].classList.add("next", direction);
  slides[currentSlide].addEventListener("animationend", function () {
    this.classList.add('active');
    this.classList.remove('next', direction);
    isEnabled = true;
  });
}
function nextSlide(n) {
	hideSlide('to-left');
	changeCurrentSlide(n + 1);
	showSlide('from-right');

}
function previousSlide(n) {
  hideSlide('to-right');
  changeCurrentSlide(n - 1);
  showSlide('from-left');
}
document.querySelector('.arrow.left').addEventListener('click', function () {
  if (isEnabled) {
    previousSlide(currentSlide);
  }
});
document.querySelector('.arrow.right').addEventListener('click', function () {
  if (isEnabled) {
    nextSlide(currentSlide);
  }
});





const input = document.querySelector('.slider');
const commentsBox = document.querySelector('.section5__4-columns');
const commentItems = document.querySelectorAll('.section5__4-columns .section5__block');
const comProgBar = document.querySelector('.slider');
let curInputVal = 0;
input.value = 0;
comProgBar.addEventListener('input', shiftComments);
window.addEventListener('resize', setComBarRange);

function setComBarRange() {

    if (window.innerWidth > 1128) {
        input.setAttribute('max', commentItems.length - 1 - 3);
        input.setAttribute('value', `${curInputVal}`);
        shiftComments();

    } else if (window.innerWidth <= 1128) {
        input.setAttribute('max', commentItems.length - 1 - 2);
        input.setAttribute('value', `${curInputVal}`);
        shiftComments();
    } else {}

}
setComBarRange();

function shiftComments() {
    commentItems.forEach((el) => {
        curInputVal = input.value;
        if (window.innerWidth > 1128) {
            el.style.left = `${-(23.09+2.5)*comProgBar.value}%`;
        } else if (window.innerWidth > 868 && window.innerWidth <= 1128) {
            el.style.left = `${(-(31.1702+3.1914)*comProgBar.value)}%`;
        } else {
            el.style.left = '0';
            input.setAttribute('value', `0`);
            curInputVal = 0;
        };

    })};