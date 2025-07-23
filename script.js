const slide = document.getElementById("carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let counter = 0;
const total = images.length;

function updateCarousel() {
  slide.style.transform = `translateX(${-counter * 100}%)`;
}

// Next Slide
next.addEventListener("click", () => {
  counter++;
  if (counter >= total) {
    counter = 0;
  }
  updateCarousel();
});

// Previous Slide
prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = total - 1;
  }
  updateCarousel();
});

// Initial
updateCarousel();
