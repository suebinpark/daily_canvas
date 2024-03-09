const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;
const centerW = canvas.width / 2;
const centerH = canvas.height / 2;

const textList = [
  "원",
  "직사각형",
  "정사각형",
  "마름모",
  "삼각형",
  "타원",
  "별",
  "오각형",
  "육각형",
  "하트",
];

let keyPressCount = 0;
let fillColor, strokeColor;

function getRandomInt(min, max) {
  //min <= returned value <= max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)},
  ${getRandomInt(0, 255)})`;
}
function getRandomVertex(margin = 10) {
  return {
    x: getRandomInt(margin, canvas.width - margin),
    y: getRandomInt(margin, canvas.height - margin),
  };
}
function changeBlackToRandomColor() {
  fillColor = getRandomColor();
  strokeColor = getRandomColor();
}
function changeRandomColorToBlack() {
  fillColor = "black";
  strokeColor = "black";
}
