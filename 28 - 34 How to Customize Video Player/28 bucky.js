function doFirst(){
	barSize=600;
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');

	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);
}

function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML = 'Play';
		window.clearInterval(updateBar);
	}else{
		myMovie.play();
		playButton.innerHTML = 'Pause';
		updateBar = setInterval(update, 500);
	}
}

function update(){
	if(!myMovie.ended){
		var size = parseInt(myMovie.currentTime*barSize/myMovie.duration);
		progressBar.style.width = size + 'px';
	}else{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'Play';
		window.clearInterval(updateBar);
	}
}

function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
		var mouseX = e.pageX-bar.offsetLeft;
		var newtime = mouseX*myMovie.duration/barSize;
		myMovie.currentTime = newtime;
		progressBar.style.width = mouseX + 'px';
	}
}

window.addEventListener('load', doFirst, false);