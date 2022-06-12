// document.querySelector("button").addEventListener("click", handleClick);

var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
