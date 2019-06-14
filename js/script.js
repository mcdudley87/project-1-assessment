var addButton;
var subButton;
var total;

function add() {
	var x = parseInt(document.getElementById("input").value);
	var y = parseInt(document.getElementById("result").textContent);
	var z = parseInt(x + y);
	document.getElementById("result").textContent = z;
};

function sub() {
	var x = parseInt(document.getElementById("input").value);
	var y = parseInt(document.getElementById("result").textContent);
	var z = parseInt(y - x);
	document.getElementById("result").textContent = z;
};

document.addEventListener("DOMContentLoaded", function() {
	addButton = document.getElementById("addButton")
	addButton.addEventListener("click", add)
	subButton = document.getElementById("subButton")
	subButton.addEventListener("click", sub)
}
);