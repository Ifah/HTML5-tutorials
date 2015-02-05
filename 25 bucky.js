function getStuff(){
	document.querySelector('#tuna').onclick=talk;
}

function talk(){
	alert('yoyoma!');
}
window.onload=getStuff;