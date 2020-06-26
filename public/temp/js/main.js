"use strict";

// TODO:
// - get elements by class name todo li, specific use
// - change between pages
// - list of available pages
// - home page with full list of widgets
// - "previous home next" at top of widget page
console.log("hello");
var myNodelist = document.getElementById("todo-ul").getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\xD7");
  span.className = "todo-close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
} // Click on a close button to hide the current list item


var close = document.getElementsByClassName("todo-close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.remove();
  };
} // Add a "checked" symbol when clicking on a list item


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); // Create a new list item when clicking on the "Add" button

function newTodo() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todo-ul").appendChild(li);
  }

  document.getElementById("todo-input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\xD7");
  span.className = "todo-close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
    };
  }
}
