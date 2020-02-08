const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
/* 
 Math.random -  임의적으로 숫자 생성
 Math.floor - 버림, Math.ceiling - 올림
*/
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
