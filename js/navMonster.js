const monsterImage = document.querySelector(".monster_example");
const eyeButton = document.querySelector(".nav_bar .eyes_example");
const favicon_monster = document.querySelector("#favicon_monster");

let images = ["m1.png", "m2.png", "m3.png", "m4.png", "m5.png", "m6.png"];

let currentIndex = 0;

function changeMonsterImage() {
  monsterImage.src = `./img/monsters/${images[currentIndex]}`;
  favicon_monster.href = `./img/monsters/${images[currentIndex]}`;
  currentIndex = (currentIndex + 1) % images.length;
}

window.addEventListener("DOMContentLoaded", (e) => {
  setInterval(changeMonsterImage, 500);
});

function setTitleTypeWriter(text, i = 1) {
  if (i < text.length) {
    windowTitle.innerText = text.slice(0, i);
    setTimeout(function (e) {
      setTitleTypeWriter(text, i + 1);
    }, 250);
  } else {
    setTimeout(function (e) {
      windowTitle.innerText = "오늘의 그래픽 몬스터";
    }, 1000);
  }
}

monsterImage.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  isMonsterCreated = true;
  let shapeCount = getRandomInt(10, 20);
  for (let i = 0; i < shapeCount; i++) {
    createRandomCreature();
  }
});
eyeButton.addEventListener("click", function (e) {
  if (isMonsterCreated) {
    createCreatureEyes();
    setTitleTypeWriter("!!!!!!!!!!");
  } else {
    alert(
      "[주의!] 투명 몬스터를 조심하세요. 눈알이 홀로 존재할 수는 없습니다..."
    );
  }
});
