const windowTitle = document.querySelector("title");

window.addEventListener("keydown", function (e) {
  if (e.key == "Backspace") {
    isMonsterCreated = false;
    keyPressCount = 0;
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    if (e.key == "1") {
      keyPressCount += 1;
      createRandomBezierCurve("fill");
    } else if (e.key == "2") {
      keyPressCount += 1;
      createRandomBezierCurve("stroke");
    } else if (e.key == "3") {
      keyPressCount += 1;
      createRandomEllipse("fill");
    } else if (e.key == "4") {
      keyPressCount += 1;
      createRandomEllipse("stroke");
    } else if (e.key == "5") {
      keyPressCount += 1;
      createRandomRect("fill");
    } else if (e.key == "6") {
      keyPressCount += 1;
      createRandomRect("stroke");
    } else if (e.key == "7") {
      keyPressCount += 1;
      ctx.font = `600 ${Math.floor(Math.random() * 10 + 30)}px 'Noto Sans KR'`;
      ctx.fillText(
        textList[Math.floor(Math.random() * textList.length)],
        getRandomInt(10, canvas.width - 50),
        getRandomInt(10, canvas.height - 50)
      );
    } else if (e.key == "s" || e.key == "S" || e.key == "ㄴ") {
      const imgLink = document.createElement("a");
      imgLink.download = "오늘의 그래픽.png";
      console.log(imgLink);
      imgLink.href = canvas.toDataURL();
      document.body.appendChild(imgLink);
      imgLink.click();
      document.body.removeChild(imgLink);
    }
  }

  // if (keyPressCount >= 100) {
  //   this.document.body.style.backgroundColor = getRandomColor();
  // } else {
    this.document.body.style.backgroundColor = "black";
  // }
});
