var list = document.querySelector(".list");
var html = document.querySelector("html");

window.addEventListener("scroll", function(e){
	console.log(e)
	if(html.getBoundingClientRect().bottom <= 7000 && html.getBoundingClientRect().bottom >= 3000)
		{
			list.style.position ="fixed";
			list.style.top = 0+"px";
		}

	if(html.getBoundingClientRect().bottom >= 7000)
	{
		list.style.position = "absolute";
		list.style.top = 3000+"px";
	}

	if(html.getBoundingClientRect().bottom <= 3000)
	{
		list.style.position = "absolute";
		list.style.top = 7000+"px";
	}
})
