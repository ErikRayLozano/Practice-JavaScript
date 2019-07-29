"use strict";
document.write(5 + 6);
var newItemCounter = 1;
var i = 0;
var myList = document.querySelector("#my-list");
var myButton = document.getElementById("my-button");
var myHeadline = document.getElementById("my-headline");
var listItems = document.querySelectorAll("#my-list li");

myList.addEventListener("click", activateItem);

function activateItem(e) {
	if (e.target.nodeName == "LI") {
	myHeadline.innerHTML = e.target.innerHTML;
	for (i = 0; i < e.target.parentNode.children.length; i++) {
	   e.target.parentNode.children[i].classList.remove("active");
    }
	e.target.classList.add("active");
  }
}

myButton.addEventListener("click", createNewItem);

function createNewItem() {
	myList.innerHTML += "<li>Something new" + newItemCounter + "</li>";
	newItemCounter++;
}