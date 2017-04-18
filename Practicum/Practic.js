

var calendar = function() {
	var d = new Date();
	
	prev = document.getElementById("prev");
	next = document.getElementById("next");

    prev.onclick = function () {
        month -= 1;
        if (month === -1) 
        {
            month = 11;
            year -= 1;
        }
        d.setMonth(month);
		d.setFullYear(year);
    };

    next.onclick = function () {
        month += 1;
        if (month === 12) {
            month = 0;
            year += 1;
        }
        d.setMonth(month);
		d.setFullYear(year);
    };
	
	var month = d.getMonth();
	var n = new Array ("Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь");
	var body = document.getElementsByTagName("body")[0];
	var table = document.createElement("table");
	var year = d.getFullYear();
	var thisday = d.getDate();
	var fday = new Date(year,month,1);
	var firstwday = fday.getDay();
	var hour = 3600000; 
	var day = hour * 24;
	var nextmonth = month==12 ? new Date(year + 1, 1, 1) : new Date(year, month + 1, 1);
	var lastday = Math.ceil((nextmonth.getTime() - fday.getTime() - hour)/day);
	var n = new Array ("Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь");
	body.appendChild(table);

  
	table.innerHTML = "<tr><td colspan=7 rowspan=1 id='month'>"+n[month]+"</td></tr>"+
	"<tr id='weekday'><td bgColor = 'blue'>Пн</td><td bgColor = 'blue'>Вт</td><td bgColor = 'blue'>Ср</td><td bgColor = 'blue'>Чт</td><td bgColor = 'blue'>Пт</td><td bgColor = 'firebrick'>Сб</td><td bgColor = 'firebrick'>Вс</td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";

	for (i = 1; i < lastday;i++) {
		var td = document.getElementsByTagName("td");
		if (i == firstwday) {
			td[0].innerHTML = n[month];
			td[7+i].innerHTML = 1;
          			  
		for (j = 0; j < lastday;j++)
			td[7+i+j].innerHTML = 1+j;        
		for (c = 8; c < 43;c++)
			if (td[c].innerHTML != 0){
				td[c].bgColor = "pink";
			}                
		for (z = 0; z <= lastday;z++)
			if (td[z].innerHTML == thisday) {
				td[z].bgColor = "red";
			}
		}
	}

	
}
calendar();    




