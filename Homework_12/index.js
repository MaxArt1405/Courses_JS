var div = document.querySelector(".div");
var B = document.querySelector(".Bold");
var K = document.querySelector(".Kurs");
var U = document.querySelector(".Underline");
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