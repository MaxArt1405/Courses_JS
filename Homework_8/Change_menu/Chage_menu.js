var first = document.querySelector(".First");
var second = document.querySelector(".Second");
var third = document.querySelector(".Third");
var html = document.querySelector("html");

first.addEventListener("click",function(e)
{
	console.log(e)
	decond.style.display ="block";
	e.stopImmediatePropagation();

		if(e.target == first &&  window.getComputedStyle(decond).display =="block")
		{
			decond.removeAttribute("style");
			third.removeAttribute("style");
		}
		
		html.addEventListener("click",function(e)
		{
			console.log(e)
			if(e.target == this && window.getComputedStyle(third).display =="none")
				second.removeAttribute("style");
			else
				third.style.display ="block";

			if(e.target == second &&  window.getComputedStyle(third).display =="block")
				third.removeAttribute("style");
			
			html.addEventListener("click",function(e)
			{
				if(e.target == this || e.currentTarget == second)
				{
					e.stopImmediatePropagation();
					third.removeAttribute("style");
				}
			})
		})
})