var countries = [	{
						flag: "Belarus.jpg",
						name: "Беларусь",
						population: 9466000,
						code: "+375"
					},
					{
						flag: "Russia.png",
						name: "Россия",
						population: 143500000,
						code: "+7"
					},
					{
						flag: "Poland.png",
						name: "Польша",
						population: 9325050,
						code: "+48"
					},
					{
						flag: "Germany.png",
						name: "Германия",
						population: 32050209,
						code: "+49"
					},
					{
						flag: "Avstia.jpg",
						name: "Австрия",
						population: 38253722,
						code: "+43"
					},
					{
						flag: "Spain.jpg",
						name: "Испания",
						population: 19098106,
						code: "+34"
					},
					{
						flag: "Portugal.jpg",
						name: "Португалия",
						population: 8523458,
						code: "+351"
					},
					{
						flag: "France.jpg",
						name: "Франция",
						population: 9122695,
						code: "+33"
					},
					{
						flag: "Italy.jpg",
						name: "Италия",
						population: 43024374,
						code: "+39"
					},
					{
						flag: "Danya.jpg",
						name: "Дания",
						population: 3060631,
						code: "+45"
					},
					{
						flag: "Nider.jpg",
						name: "Нидерланды",
						population: 31842848,
						code: "+31"
					},
					{
						flag: "Bosnya.jpg",
						name: "Босния и Герцеговина",
						population: 3212534,
						code: "+387"
					}
				];

var table = document.createElement("table");
	var elements = document.getElementById("table"); 
	elements.appendChild(table);  
	
var body = document.createElement("body"); 
elements.appendChild(body); 

for(var i = 0; i < countries.length; i++)
{ 

		var tr = document.createElement("tr"); 
			body.appendChild(tr); 
			var td = document.createElement("td"); 
			td.innerHTML = countries[i].name; 
			tr.appendChild(td); 

			var td = document.createElement("td"); 
				td.innerHTML = countries[i].population; 
			tr.appendChild(td); 

			var td = document.createElement("td"); 
				td.innerHTML = countries[i].code; 
			tr.appendChild(td);  

			var td = document.createElement("td"); 
				tr.appendChild(td); 
			var img = document.createElement("img"); 
			td.appendChild(img); 
				img.setAttribute("src",countries[i].flag); 
				img.setAttribute("width","60px"); 
	}