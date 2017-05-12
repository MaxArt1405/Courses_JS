var id = 0;
function Product( name, type, cost, date){
	this.id = ++id;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.date = new Date(date);
}
function Food(name, type, cost, date, dateB){
	Product.apply(this, arguments);
	this.dateB = new Date(dateB);

	Object.defineProperty(this, "SLife", {
		get: function(){
			return this.dateB - this.date;
		}
	})
}
function Shop(name, adress, products, markup, income){
	this.name = name;
	this.adress = adress;
	this.products = products;
	this.markup = markup;
	this.income = income;
	Object.defineProperty(this, "sum", {
		get: function(){
			var sum = 0;
			for(var i = 0; i < this.products.length; i++){
				sum += this.products[i].cost;
			}
			return sum;
		}
	})
}

Shop.prototype.addProducts = function(t,n){
	for(var i = 0; i < n; i++){
		this.products.push(t);
	}
}
Shop.prototype.delProducts = function(t, n){
	for(var i = 0; i < this.products.length; i++){}
}
Shop.prototype.Info = function(){
	var str;
	str += this.name;
	str += ", Адрес:" + this.adress;
	return str;
}
var o = new Food('Товар', 'продовольственный', 500, '2017-02-12', '2018-02-12');