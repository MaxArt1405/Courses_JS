var a = prompt("Введите число a")
var b = prompt("Введите действие")
var c = prompt("Введите число b")
switch(b)
{
	case("+"):
		{
			var d = +a + +c;
			alert("Результат: " +d);
		}
	break;
	case("-"):
		{
			d = a - c;
			alert("Результат: " +d);
		}
	break;
	case("*"):
		{
			d = a * c;
			alert("Результат: " +d);
		}
	break;
	case("/"):
		{
			d = a / c;
			alert("Результат: " +d);
		}
	break;
	case("^"):
		{
			d = Math.pow(a,c);
			alert("Результат: " +d);
		}
	break;
	case("%"):
		{
			d = a % c;
			alert("Результат: " +d);
		}
	break;	
	default:
	  	alert("Введено неверное арифметическое действие!")
}