var xhr = new XMLHttpRequest();
var routes = {	
			'#info': {
				path: 'info.html',
				handler: function(){
					var prev = document.querySelector('.prev');
					var next = document.querySelector('.next');
					var content = document.querySelector('.slide-content');
					var ind = 0;
					prev.addEventListener('click', function(e){
						e.preventDefault();
						var slides = content.querySelectorAll('p');
						
						if(ind > 0 ){
							slides[ind].classList.remove('active');
							index --;
							slides[ind].classList.add('active');
						}
										
					})
					next.addEventListener('click', function(e){
						e.preventDefault();
						var slides = content.querySelectorAll('p');
						if(index <  slides.length - 1){
							slides[ind].classList.remove('active');
							ind ++;
							slides[ind].classList.add('active');
						}
										
					})
				}
			},
			'#about': {
				path: 'about.html',
				handler: function(){
					var about = document.querySelector('.about')
				}
			},
			'#feedback': {
				path: 'feedback.html',
				handler: function(){
					var button = document.querySelector('button');
					var text = document.querySelector('textarea');
					button.addEventListener('click', function(){
						alert(text.value);
					})
				}
			},
			'#forum': {
				path: 'forum.html',
				handler: function(){
					var button = document.querySelector('button');
					var text = document.querySelector('textarea');
					var comments = document.querySelector('.comments');
					
					button.addEventListener('click', function(){
						var p = document.createElement('p');
						p.innerText = text.value;
						comments.appendChild(p);
						text.value ="";
					})
				}
			}
}
var route = function(){
	var hash = location.hash;
	var path = null;
	var handler = null;
	for(var h in routes)
	{
		if(h == hash)
		{
			path = routes[h].path;
			handler = routes[h].handler;
		}
	}
	if(path!=null)
		openPage(path, handler);
	
}

function openPage(path, handler){
	xhr.open("GET", path , true); 
	xhr.onload = function()
	{
		document.getElementById('block').innerHTML = xhr.responseText;
		handler();
	}
	xhr.send();
}
window.onhashchange = route;
route();