var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("#background");
var rand = document.querySelector("#random");
color1.defaultValue = "#ff0000";
color2.defaultValue = "#ffff00";

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

function randomGenerator(){
	var rand_color1 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + rand_color1;
	var rand_color2 = Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + rand_color2;
	setGradient();
}


h3.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
rand.addEventListener("click", randomGenerator);
