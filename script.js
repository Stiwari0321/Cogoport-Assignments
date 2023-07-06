
var box = document.getElementById("colorBox");
var interval = setInterval(function() {
box.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}, 2000);
