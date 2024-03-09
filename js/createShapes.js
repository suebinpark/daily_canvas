function createRandomBezierCurve(fillOption, com = "xor") {
  ctx.globalCompositeOperation = com;
  let start = getRandomVertex();
  let cp1 = getRandomVertex();
  let cp2 = getRandomVertex();
  let end = getRandomVertex();
  if (fillOption == "fill") {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    ctx.fill();
  } else if (fillOption == "stroke") {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = getRandomInt(5, 20);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    ctx.stroke();
  }
}
function createRandomEllipse(fillOption, com = "xor") {
  ctx.globalCompositeOperation = com;
  let center = getRandomVertex();
  let radiusX = getRandomInt(10, canvas.width / 4);
  let radiusY = getRandomInt(10, canvas.height / 4);
  if (fillOption == "fill") {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.ellipse(
      center.x,
      center.y,
      radiusX,
      radiusY,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    ctx.fill();
  } else if (fillOption == "stroke") {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = getRandomInt(2, 5);
    ctx.beginPath();
    ctx.ellipse(
      center.x,
      center.y,
      radiusX,
      radiusY,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    ctx.stroke();
  }
}
function createRandomRect(fillOption, isRegular = true, com = "xor") {
  ctx.globalCompositeOperation = com;
  let start = getRandomVertex();
  let width;
  let height;
  if (!isRegular) {
    width = getRandomInt(5, canvas.width / 4);
    height = getRandomInt(5, canvas.height / 4);
  } else {
    width = getRandomInt(20, 60);
    height = width;
  }
  if (fillOption == "fill") {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.rect(start.x, start.y, width, height);
    ctx.fill();
  } else if (fillOption == "stroke") {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = getRandomInt(1, 5) + 0.2;
    ctx.beginPath();
    ctx.rect(start.x, start.y, width, height);
    ctx.stroke();
  }
}
