var str = "()(()(";
var d = 0;
d = Number(d);
for(var i = 0; i < str.length; i++)
	{
		if(str[i] == "(")
			d++;
		if(str[i] == ")")
			d--;
		if(d<0)
		  	break;
	}
if(d == 0){
	alert("True");
}
else{
	alert("False");
}