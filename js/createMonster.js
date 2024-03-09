let isMonsterCreated = false;

function createRandomCreature() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "black";
  let cp = getRandomVertex();
  let end = getRandomVertex();
  ctx.beginPath();
  ctx.moveTo(centerW, centerH);
  ctx.quadraticCurveTo(cp.x, cp.y, end.x, end.y);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(
    centerW,
    centerH,
    getRandomInt(10, 150),
    getRandomInt(10, 150),
    Math.PI / 4,
    0,
    2 * Math.PI
  );
  ctx.fill();
}
let pupilX = centerW;
let pupilY = centerH + 10;
let pupilSize = getRandomInt(9, 13);
function createCreatureEyes() {
  // if (Math.random() < 0.7) {
  pupilSize = getRandomInt(9, 13);
  //eyeballs
  ctx.fillStyle = "white";
  ctx.beginPath();
  //left eyeball
  ctx.ellipse(centerW - 40, centerH, 20, 30, Math.PI / 8, 0, 2 * Math.PI);
  //right eyeball
  ctx.ellipse(centerW + 40, centerH, 20, 30, Math.PI / 8, 0, 2 * Math.PI);
  ctx.fill();

  //pupils
  ctx.fillStyle = "black";
  ctx.beginPath();
  //left pupil
  ctx.ellipse(
    pupilX - getRandomInt(40, 43),
    pupilY - Math.random() * 12 + 1,
    pupilSize,
    pupilSize,
    Math.PI / 4,
    0,
    2 * Math.PI
  );
  //right pupil
  ctx.ellipse(
    pupilX + getRandomInt(35, 40),
    pupilY - Math.random() * 12 + 1,
    pupilSize,
    pupilSize,
    Math.PI / 4,
    0,
    2 * Math.PI
  );
  ctx.fill();
}
