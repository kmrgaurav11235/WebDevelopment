function getRandomDiceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomImage() {
  var randomNumber = getRandomDiceRoll();
  var imageSrc = "images/dice" + randomNumber + ".png";
  return imageSrc;
}

document.querySelector(".img1").setAttribute("src", getRandomImage());
document.querySelector(".img2").setAttribute("src", getRandomImage());
