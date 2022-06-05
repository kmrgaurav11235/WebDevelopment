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
