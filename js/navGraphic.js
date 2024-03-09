const favicon_graphic = document.querySelector("#favicon_graphic");
let images = ["box1_1.png", "box1_2.png", "box1_3.png", "box1_4.png"];

let currentIndex = 0;

function changeGraphicFavicon() {
  // favicon_graphic.href = `img/animate/${images[currentIndex]}`;
  currentIndex = (currentIndex + 1) % images.length;
}

window.addEventListener("DOMContentLoaded", (e) => {
  setInterval(changeGraphicFavicon, 500);
});
