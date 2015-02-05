function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveIt, false);
}
function saveIt(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);

	display(one);
}
function display(one){
	var rightbox = document.getElementById("rightbox");
	var two = sessionStorage.getItem(one);
	rightbox.innerHTML = "Name of variable: " + one + "<br/>Value: " + two; 
}
window.addEventListener("load", doFirst, false);
