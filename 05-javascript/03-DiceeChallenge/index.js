var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSrc1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imageSrc1);
