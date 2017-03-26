var n = prompt("Введите n: "), x = prompt("Введите х: ");
var arr = new Array(n), sum = 0;
for (var i = 0; i <= n; i++)
{
	arr[i] = Number(prompt("Enter arr[i]"));
	sum += arr[i]*Math.pow(x,i);
}
console.log("The array A[i]: " ,arr, "The sum of the array is: ", sum);