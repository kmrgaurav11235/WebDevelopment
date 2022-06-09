// Select all 3 list items -- returns an array
var listItems = document.getElementsByTagName("li");
// Modify the second <li> item
listItems[1].style.color = "purple";
// get the length of listItems
console.log(listItems.length);

// Get the button using class name -- returns an array
var button = document.getElementsByClassName("btn")[0];
button.style.color = "red";

// Get the h1 using id -- returns a single element (since ids are unique)
var h1 = document.getElementById("title");
h1.innerHTML = "Goodbye";

// var thirdItem = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild; // Doesn't works becuase we have to add <script> tag

// querySelector can be element or class (with . sign) or id (with # singn). Basically, anything you write before parentheses in the css files.
var thirdItem = document.querySelector("ul").lastElementChild;
thirdItem.innerHTML = "Gaurav";

// Use querySelector to select tag using id
console.log(document.querySelector("#title"));

// Use querySelector to select tag using class
console.log(document.querySelector(".btn"));

// Combining selectors
console.log(document.querySelector("li a"))
console.log(document.querySelector("li.item"))
console.log(document.querySelector("#list a"))

// If there are multiple elements that match, querySelector returns the first one.
console.log(document.querySelector("#list .item"))

// If you want all elements that match, querySelectorAll can be used -- returns an array.
console.log(document.querySelectorAll("#list .item"))

// Styling with DOM Style objects is a little different from CSS. We use camel case instead of kebab case. Also the values have to be String.
// https://www.w3schools.com/jsref/dom_obj_style.asp
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("button").style.backgroundColor = "yellow";

// It is not a good idea to apply styles using javascript. We should a separation of concerns between html, css and js.
// Better is to define class in css file and apply that class to html elements using js.
document.querySelector("li").classList.add("invisible");
document.querySelector("h1").classList.remove("title");
document.querySelector("a").classList.toggle("huge");

// innerHTML can be used to modify the inner html. textContent just modifies the text
document.querySelector("#firstBye").innerHTML = "<em>Bye 1 modified</em>";
document.querySelector("#secondBye").textContent = "<em>Bye 2 modified</em>";
