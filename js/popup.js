const questionButton = document.querySelector(".questionBtn");
const noticeBox = document.querySelector(".notice");
const popup = document.querySelector(".popup");

questionButton.addEventListener("mouseover", function (e) {
  popup.style.visibility = "visible";
});
questionButton.addEventListener("mouseout", function (e) {
  popup.style.visibility = "hidden";
});
