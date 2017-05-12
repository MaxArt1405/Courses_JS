var audio = document.getElementsByTagName("audio")[0];
var play = document.querySelector(".Play");
var stop = document.querySelector(".Stop");
var fast = document.querySelector(".Fast");
var slow = document.querySelector(".Slow");
var volume = document.querySelector(".Volume"); 
var time = document.querySelector("time");
var currentTime = document.querySelector("currentTime");


play.addEventListener("click", function(){
	if(audio.paused == true){	
		audio.play();
	}
	else{
		audio.pause();
	}
});
stop.addEventListener("click", function(){
	audio.pause();
	audio.currentTime = 0;
});
fast.addEventListener("click", function(){
	audio.playbackRate*=1.25;
});
slow.addEventListener("click", function(){
	audio.playbackRate/=1.25;
});
volume.addEventListener("click", function(){
	if(audio.muted == false){
		audio.muted = true;
	}
	else{
		audio.muted = false;
	}
});
function change() {
    vol = document.getElementById("value").value;
    audio.volume = vol/100;
   };

function fill(){
	var time = audio.duration;
	var str;
	var minutes = parseInt(time/60);
	if(parseInt(minutes/10) == 0){
		str = '0' + minutes;
	}
	else{
		str = minutes;
	}
	var seconds = Math.ceil(time - minutes*60)
	if(parseInt(seconds/10) == 0){
		str += ":0" + seconds;
	}
	else{
		str += ":" + seconds;
	}
	time.innerText = str;

};
