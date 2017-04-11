var precode = document.getElementsByClassName("precode"); 
var postcode = document.getElementsByClassName("postcode") 
var transOn = document.getElementsByClassName("TransOn"); 
var transFrom = document.getElementsByClassName("TransFrom"); 



transOn[0].addEventListener("click", function(){ 

	var arr = new Array();
	var arrS = precode[0].value; 
	for(var i = 0; i < precode[0].value.length; i++)
		arr.push(arrS.charCodeAt(i));  

	var newarr = new Array(); 
	newarr = arr.map(function(e){ 
		var koef = e/5*2 + 3; 
		var ch2 = koef.toString(); 
		return (ch2) 
	}); 

	postcode[0].value = newarr; 
}) 

transFrom[0].addEventListener("click", function(){ 

	var arr2 = new Array(); 
	var arrN = postcode[0].value.toString(); 
	arr2 = arrN.split(","); 
	var arr3 = new Array(); 
	
	arr3 = arr2.map(function(e){ 
		return (e-3)*5/2; 
		}); 

	var str = ''; 
	for(var i = 0; i < arr3.length; i++){ 
		str += String.fromCharCode(arr3[i]); 
	} 
precode[0].value = str ; 

})