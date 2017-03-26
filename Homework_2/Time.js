var d = new Date(Date.now());
var Day = d.getDate();
	var d2 = new Date(Date.now());
	d2.setDate(Day+1);
	d2.setHours(0);
	d2.setMinutes(0);
	d2.setSeconds(0);
		var r = d2 - d;
		var hours = Math.floor(r/3600000)
		var min = Math.floor((r - (hours*3600000))/60000);
		var sec = Math.floor(((r/3600000 - hours)*60 - min)*60);
		alert("До конца дня осталось: "+hours+" часов "+min+" минут "+sec+ " секунд");