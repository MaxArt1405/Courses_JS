var Name = new Array('Георгий Брагин', 
		'Яков Гущин', 'Ростислав Кириллов', 
		'Александр Колесников', 'Иван Гурьев', 
		'Степан Копылов', 'Виктор Макаров', 
		'Олег Комиссаров', 'Александр Станкевич', 
		'Эльдар Джарахов', 'Павел Шиколай', 
		'Ваня Колячко', 'Дминтрий Яковчик', 
		'Артём Вашкевич', 'Коля Дадаев', 
		'Дима Чаботько' , 'Ваня Шавела', 
		'Женя Эйсмонт', 'Миша Волков');
var n = 5;
var House={

 	Persons: [], 
 	flats: [],
 	addPeople: function(name, number)
 	{	
 		if((isFinite(number)) && (number <= this.flats.length) && number )
 		{
	 		this.Persons.push({name: name, flatNum: number});
	 		this.flats[number-1].Persons.push(name);
	 	}
 	},
 	cleanFlat: function(number){
 		if(typeof (arguments[0]) == "undefined")
 		{
 			var number = parseInt(prompt("Введите квартиру: "));
 		}
 			if(isFinite(number) && (number <= this.flats.length) && number)
 		{
	 		 this.flats[number-1].Persons.length = 0;
	 		 for(var i = 0; i < this.Persons.length; i++)
	 		 {
	 		 	if(this.Persons[i].flatNum == number)
	 		 	{
	 		 		this.Persons.splice(i, 1);
	 		 		i--;
	 		 	}
	 		 }
 		}
 		else
 			console.error("Ошибка!");
 		

 	},
 	ViewListPer: function(number){
 		if(typeof (arguments[0]) == "undefined")
 			var number = parseInt(prompt("Vvedite kvartiru: "));

 		if(isFinite(number) && (number <= this.flats.length) && number)
 		{
 			if(this.flats[number-1].Persons.length)
 				console.log("Квартира №' " + number + ": " + this.flats[number-1].Persons.join(", "));	
 			else
 				console.log("В квартире №" + number + " никто не проживает");	
	 	}	
	 	else
	 		console.error("Ошибка!");
 	},
 	calculating: function(sum){
 		if(typeof (arguments[0]) == "undefined")
 			var sum = parseFloat(prompt("Введите sum: "));
 
 		if(isFinite(parseFloat(sum)) && (sum > 0))
 		{
	 		var FullSquare = 0;
	 		var CostList = [];

	 		this.flats.forEach(function(e)
	 		{
	 			if(e.Persons.length)
	 				FullSquare +=e.square;
	 			
	 		});
	 		this.flats.forEach(function(e)
	 		{
	 			if(e.Persons.length)
	 			{
	 				var cost = sum / FullSquare/ e.Persons.length * e.square;
	 				e.Persons.forEach(function(c)
	 				{
	 					CostList.push({name: c, cost: cost});
	 				})
	 				
	 			}
	 		})
	 		CostList.forEach(function(e)
	 		{
	 			console.log(""+ e.name + " : " + e.cost.toFixed(3));
	 		})
		}
		else
			console.error("Ошибка!");
 	}
}

for(var i = 0; i < n; i++){
	House.flats[i] = {
		square: parseInt(Math.random()* 40 + 40),
		floor: parseInt(Math.random()* n/5 + 1),
		Persons: []
	}
}

for(var i=0; i < Name.length; i++)
{
	House.Persons[i] = {
		name: Name[i],
		flatN: parseInt(Math.random()*1000 % n + 1)
	}
	House.flats[House.Persons[i].flatN-1].Persons.push(Name[i]) ;
}
console.log(House);


House.ViewListPer(1);
House.addPeople("Максим", 1);
House.ViewListPer(1);
House.cleanFlat(1);
House.ViewListPer(1);
House.calculating(1000);

console.log(House);