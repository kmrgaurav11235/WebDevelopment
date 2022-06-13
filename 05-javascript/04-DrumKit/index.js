// document.querySelector("button").addEventListener("click", handleClick);

var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHtml)
    }


  });
}

// Javascript objects and their methods
function HouseKeeper(name, age, dob, workingFor) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.workingFor = workingFor;
    this.clean = function () {
        console.log("Cleaning...");
    }
}

var houseKeeper1 = new HouseKeeper("Raman", 42, "12-02-1984", 3.7);
console.log(houseKeeper1.name);
houseKeeper1.clean();
