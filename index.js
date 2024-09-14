// DRUM KIT

//Getting audio urls to soundObject
var soundObj = {
  wSound: new Audio("./sounds/crash.mp3"),
  aSound: new Audio("./sounds/kick-bass.mp3"),
  sSound: new Audio("./sounds/snare.mp3"),
  dSound: new Audio("./sounds/tom-1.mp3"),
  jSound: new Audio("./sounds/tom-2.mp3"),
  kSound: new Audio("./sounds/tom-3.mp3"),
  lSound: new Audio("./sounds/tom-4.mp3"),
};

//Getting .col class elements
var callBtn = document.querySelectorAll(".col");

//Checking pressed Key and sending to function for audio play
document.addEventListener("keydown", function (event) {
  let pressedKey = event.key + "Sound";
  playAudio(pressedKey);
  buttonAnimation(event.key);
});

//Checking pressed Button and sending to function for audio play
for (i = 0; i <= callBtn.length; i++) {
  callBtn[i].addEventListener("click", function () {
    var pressedButton = this.textContent.toLowerCase() + "Sound";
    playAudio(pressedButton);
    buttonAnimation(this.textContent.toLowerCase());
  });
}

function playAudio(selectKey) {
  soundObj[selectKey].currentTime = 0;
  soundObj[selectKey].play();
}

//Button animation for active key/button with adding a class
function buttonAnimation(pressedKey) {
  var activeButton = document.querySelector("." + pressedKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
