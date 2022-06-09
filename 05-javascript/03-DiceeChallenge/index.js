function getRandomDiceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function getImage(imageNumber) {
  var imageSrc = "images/dice" + imageNumber + ".png";
  return imageSrc;
}

var randomNumber1 = getRandomDiceRoll();
var randomNumber2 = getRandomDiceRoll();

document.querySelector(".img1").setAttribute("src", getImage(randomNumber1));
document.querySelector(".img2").setAttribute("src", getImage(randomNumber2));

var title = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  title.textContent = "🚩Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  title.textContent = "Player 2 wins! 🚩";
} else {
  title.textContent = "Draw";
}
