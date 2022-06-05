// var thirdItem = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild; // Doesn't works becuase we have to add <script> tag
var thirdItem = document.querySelector("ul").lastElementChild;
thirdItem.innerHTML = "Gaurav";
