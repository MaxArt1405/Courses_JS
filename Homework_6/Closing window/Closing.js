var names = new Array('Георгий Брагин', 
		'Яков Гущин', 'Ростислав Кириллов', 
		'Александр Колесников', 'Иван Гурьев', 
		'Степан Копылов', 'Виктор Макаров', 
		'Олег Комиссаров');
var cities = new Array('Лиды', 'Минска', 'Гродно', 
			'Могилёва', 'Гомеля', 'Витебска', 'Воложина', 
			'Каллифеи', 'Калмуная' ,'Калукана', 'Калулуши', 
			'Калькутты');
var products = [
	{
		img:"USB.jpg",
		name:"USB 16Gb",
	},

	{
		img:"Type_c.jpg",
		name:"Cabel Type C",
	},

	{
		img:"Ears.jpg",
		name:"Ears Beats",
	},

	{
		img:"Intel.jpg",
		name:"Intel Core i7-7700K",
	},

	{
		img:"SSD.jpg",
		name:"SSD Samsung 128Gb",
	},
	{
		img:"Video.jpg",
		name:"Asus GeForce 980 Ti",
	},
	{
		img:"Colant.jpg",
		name:"Colant for Kaby Lake",
	},
	{
		img:"DDR.jpg",
		name:"DDR4 Kingston 8Gb",
	}
];

function interv(){
	return Math.round(Math.random()*1800 + 2700);
}
var Y = 0;
var List = document.getElementsByTagName("div");
	setInterval(function(){
		
		var num = Math.round(Math.random()*(products.length - 1));
		var counter = Math.ceil(Math.random()*10);
		var windows = document.createElement("div");
			List[0].appendChild(windows);

				Y = Y+50;
				var img = document.createElement("img");
					windows.appendChild(img);
					img.setAttribute("src",products[num].img);
					img.setAttribute("width","50px");		

				var spanNameMan = document.createElement("span");
					spanNameMan.setAttribute("class", "str1");
					spanNameMan.innerHTML = names[num];
					windows.appendChild(spanNameMan);

				var spanCities = document.createElement("span");
					spanCities.innerHTML = " из " +cities[num];
					windows.appendChild(spanCities);
					spanCities.setAttribute("class", "str1");

				var closeImg = document.createElement("img");
					windows.appendChild(closeImg);
					closeImg.setAttribute("src","Close.png");
					closeImg.setAttribute("class","close");

				var spanNameProduct = document.createElement("span");
					spanNameProduct.setAttribute("class", "str");
					spanNameProduct.innerHTML =" Купил "+"\""+products[num].name+"\"";	
					windows.appendChild(spanNameProduct);	

				var spanCount = document.createElement("span");
					spanCount.setAttribute("class", "str2");
					spanCount.innerHTML = "   ("+(counter)+" штук)";
					windows.appendChild(spanCount);

				closeImg.addEventListener("click",function(){
					this.parentNode.remove();
				})		
	},interv()) 