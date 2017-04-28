var id = 0;
function item(name, type, cost, date,id){
    this.name = name; 
    this.type = type; 
    this.cost = cost; 
    this.date = new Date(date); 
    id++;
    this.id = id; 
};


function Freshfood(ShelfLife)
{
    item.apply(this, arguments);
    this.ShelfLife = new Date(ShelfLife);// годен до
    
    Object.defineProperty(this, "ShelfLife", { 
	    get: function() {
	        return this.ShelfLife.getMonth() - this.date.getMonth();
	    }
	});
};

Freshfood.prototype = new item();

function Shop(name, addres, markup)
{
    this.name = name; 
    this.addres = addres; 
    this.markup = markup;  
    
    Object.defineProperty(this, "items", 
    { 
	    set: function(Item) {
	        this.items.push(Item);
	    }
    });
    
    
    Object.defineProperty(this, "sum", 
    { 
	    get: function() 
	    {
	        var sum = 0;
	        for(var i = 0; i < this.items.length; i++){
	            sum += this.items[i].cost;
	    };
	    return sum;
    }
    });
    
};

Shop.prototype.addProduct = function(t, n){
    for(var i = 0; i < n; i++) {
        this.items.push(t);
    }
};