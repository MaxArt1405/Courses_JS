var m = prompt("Enter m: ");
document.body.append(table);

for(var i = 1; i <= m; i++){
	
	var tr = document.createElement("tr");
	
	for(var j = 1; j <= m; j++){
		
		var td = document.createElement("td");
			
			var el = j * i;
			td.innerHTML=el;
			tr.appendChild(td);
			
			if(el == i*i)
				td.setAttribute("Style", "color: blue");
				
		
		}
	
	table.appendChild(tr)
}