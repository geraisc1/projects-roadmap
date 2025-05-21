const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

next.addEventListener('click', () => {
  index = (index + 1) % slideElements.length;
  updateSlide();
});

prev.addEventListener('click', () => {
  index = (index - 1 + slideElements.length) % slideElements.length;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}