// https://www.ma-no.org/en/programming/javascript/vanilla-javascript-equivalent-commands-to-jquery
// Add "focus" and "highlighted" classes, and then remove them
var box = document.querySelector(".box");
box.classList.add("focus", "highlighted");
box.classList.remove("focus", "highlighted");
box.classList.toggle("focus");

// Remove the "focus" class and add "blurred"
document.querySelector(".box").classList.replace("focus", "blurred");
