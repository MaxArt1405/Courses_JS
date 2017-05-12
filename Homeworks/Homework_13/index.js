var div = document.querySelector(".div");
var B = document.querySelector(".Bold");
var K = document.querySelector(".Kurs");
var U = document.querySelector(".Underline");
var font = document.querySelector(".Text");
var fontSize = document.querySelector(".fontSize");
var fontFamily = document.querySelector(".fontFamily");
var textBackroundColor = document.querySelector(".Background");
var btnBackground = document.querySelector(".colorBack");
var textColor = document.querySelector(".colorText");
var btnTextColor = document.querySelector(".colorTxt");

div.contentEditable = true;

B.addEventListener("click", function(e){
	document.execCommand("bold", false, null);
});
K.addEventListener("click", function(e){
	document.execCommand("italic", false, null);
});
U.addEventListener("click", function(e){
	document.execCommand("underline", false, null);
});
font.addEventListener("click", function(){
	if(fontSize.value){
		document.execCommand("fontSize", false, Number(fontSize.value));
	}
	if(fontFamily.value){
		document.execCommand("fontFamily", false, fontFamily.value);
	}
});
btnBackground.addEventListener("click", function(){
	document.execCommand("backcolor",false,textBackroundColor.value)
});
btnTextColor.addEventListener("click", function(){
	document.execCommand("forecolor",false,textColor.value)
});


