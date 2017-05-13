var audio = document.getElementsByTagName("audio")[0];
var play = document.querySelector(".Play");
var stop = document.querySelector(".Stop");
var fast = document.querySelector(".Fast");
var slow = document.querySelector(".Slow");
var volume = document.querySelector(".Volume"); 
var time = document.querySelector("time");
var currentTime = document.querySelector("currentTime");
var time = document.getElementById('time');
var playContainer = document.getElementById('container');
var next = document.querySelector(".Next");
var prev = document.querySelector(".Prev");
audios = document.querySelector(".audios");


var xhr = new XMLHttpRequest();
var playlist = document.querySelector("Playlist");

xhr.open("GET","index.json",true);
	
	
xhr.send()






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

var a = audio.duration;
var time = document.getElementById('time');
audio.addEventListener('loadedmetadata',function(){
	setInterval(function(){
		time.innerHTML ="0:"+ Math.round(audio.currentTime)+"|"+ Math.round(audio.duration/60)+":"+"03";
		
	},1000)

});


setInterval(audioSlider,100);

function audioSlider(){
	var load = document.getElementById('load');
	var c = audio.currentTime/audio.duration*100;
		load.style.width=c*2+'px';
};

next.addEventListener("click", function() {
	
	});

prev.addEventListener("click", function() {
	
	});


var xhr = new XMLHttpRequest();
var playlist = document.querySelector("Playlist");
var body = document.querySelector("body");

xhr.open("GET","index.json",true);
	
xhr.send()
