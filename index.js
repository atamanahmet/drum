//drum kit
const wSound = new Audio("./sounds/crash.mp3");
const aSound = new Audio("./sounds/kick-bass.mp3");
const sSound = new Audio("./sounds/snare.mp3");
const dSound = new Audio("./sounds/tom-1.mp3");
const jSound = new Audio("./sounds/tom-2.mp3");
const kSound = new Audio("./sounds/tom-3.mp3");
const lSound = new Audio("./sounds/tom-4.mp3");
var test;
addEventListener("keydown", (pressedKey) => {
  console.log(pressedKey.key);

  if (pressedKey.key == "w") {
    wSound.currentTime = 0;
    wSound.play();
  } else if (pressedKey.key == "a") {
    aSound.currentTime = 0;
    aSound.play();
  } else if (pressedKey.key == "s") {
    sSound.currentTime = 0;
    sSound.play();
  } else if (pressedKey.key == "d") {
    dSound.currentTime = 0;
    dSound.play();
  } else if (pressedKey.key == "j") {
    jSound.currentTime = 0;
    jSound.play();
  } else if (pressedKey.key == "k") {
    kSound.currentTime = 0;
    kSound.play();
  } else if (pressedKey.key == "l") {
    lSound.currentTime = 0;
    lSound.play();
  }
});
document.getElementById("w").addEventListener("click", handleClickW);
document.getElementById("a").addEventListener("click", handleClickA);
document.getElementById("s").addEventListener("click", handleClickS);
document.getElementById("d").addEventListener("click", handleClickD);
document.getElementById("j").addEventListener("click", handleClickJ);
document.getElementById("k").addEventListener("click", handleClickK);
document.getElementById("l").addEventListener("click", handleClickL);


function handleClickW() {
  wSound.currentTime=0;
  wSound.play();
}
function handleClickA() {
  aSound.currentTime=0;
  aSound.play();
}
function handleClickS() {
  sSound.currentTime=0;
  sSound.play();
}
function handleClickD() {
  dSound.currentTime=0;
  dSound.play();
}
function handleClickJ() {
  jSound.currentTime=0;
  jSound.play();
}
function handleClickK() {
  kSound.currentTime=0;
  kSound.play();
}
function handleClickL() {
  lSound.currentTime=0;
  lSound.play();
}
