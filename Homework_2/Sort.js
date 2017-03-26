var n = prompt("Введите количество элементов: ");
var s = prompt("Введите число для диапазона: ");
var p = prompt("Введите % разбиения значений: ");
	var c = 0,sum = 0;
	var arr = new Array();
for(var i = 0; i <= n; i++)
	{
		var a = Math.round(Math.random()*s + s*p/100);
			if(a > (s-(s*p/100)) && a < (s+(s*p/100)))
			{
				console.log(a);
				sum += a;
 				arr[c] = a;
 				c++;
			}
    }
console.log("Среднее арифметическое: " ,Math.round(sum/c)); 
var swp = 0;
for (var i=c-1; i>=0; i--)
  {
    for (var j=0; j<i; j++)
    {
      if (arr[j] > arr[j+1])
      {
        swp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = swp;
      }
    }
  }
console.log("Отсортированный массив: " , arr);