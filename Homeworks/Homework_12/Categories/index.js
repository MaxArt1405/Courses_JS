var xhr = new XMLHttpRequest();
var html = document.querySelector("html");
var body = document.querySelector("body");

var callbackfunc = function(text){
	var div = document.createElement("div");
	div.innerHTML = text;
	body.appendChild(div)
}


window.addEventListener("scroll", function(e){
	console.log(body.scrollHeight)
	if(html.getBoundingClientRect().bottom<1000){
		xhr.open("GET","next.html",true);
		xhr.onload = function(){
			callbackfunc(xhr.responseText);
		}
		xhr.send(null)
	}
})