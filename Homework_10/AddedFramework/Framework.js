var Framework = {

	append: function(t, w)
	{
		t.appendChild(w);
	},
	
	prepend: function(t, w)
	{
		t.insertBefore(w, t.firstChild)
	},

	replace(t, w)
	{
		t.parentNode.replaceChild(t, w);
	},
	
	create(s)
	{
		return document.createElement(s);
	},
	
	remove(t)
	{
		t.remove();
	},
	
	event(t, e, f)
	{
		if(typeof t.attachEvent == "function")
		
			t.attachEvent('on' + e, f);
		
		else
			t.addEventListener(e, f);
		
	},
	
	unevent(t, e, f)
	{
		if(typeof t.attachEvent == "function")
			t.detachEvent('on' + e, f);
		
		else
			t.removeEventListener(e,f);	
	},
	
	dispatch(t, e)
	{
		var event = new Event(e);
		t.dispatchEvent(e);
	},
	width(e)
	{
		return e.clientWidth;
	},

	height(e)
	{
		return e.clientHeight;
	},

	pageTop: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetTop;
			e = e.offsetParent;
		}
		return offset;
	},
	pageLeft: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetLeft;
			e = e.offsetParent;
		}
		return offset;
	},

	css: function(e, p, value){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[p];
		}
		if(arguments.length == 3){
			e.style[p] = value;
		}
	},

	ajax: function(m, p, f){
			var xhr = new XMLHttpRequest();
			xhr.onload = f;
			xhr.open(m, p, true); 
			xhr.send();
		}
}