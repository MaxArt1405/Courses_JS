var table = document.getElementById('tb');
var content = "<tr>\
	<td>window.location.href:</td>\
	<td>"+window.location.href+"</td\
</tr>\
<tr>\
	<td>window.location.protocol:</td>\
	<td>"+window.location.protocol+"</td\
</tr>\
<tr>\
	<td>window.location.port:</td>\
	<td>"+window.location.port+"</td\
</tr>\
<tr>\
	<td>window.location.search:</td>\
	<td>"+window.location.search+"</td\
</tr>\
<tr>\
	<td>window.location.hash:</td>\
	<td>"+window.location.hash+"</td\
</tr>\
<tr>\
	<td>window.screen.width:</td>\
	<td>" +window.screen.width+"</td\
</tr>\
<tr>\
	<td>window.screen.height:</td>\
	<td>"+window.screen.height+"</td\
</tr>\
<tr>\
	<td>window.screen.availWidth:</td>\
	<td>"+window.screen.availWidth+"</td\
</tr>\
<tr>\
	<td>window.innerHeight:</td>\
	<td>"+window.innerHeight+"</td\
</tr>\
<tr>\
	<td>window.innerWidth:</td>\
	<td>"+window.innerWidth+"</td\
</tr>\
<tr>\
	<td>window.screen.availHeight:</td>\
	<td>"+window.screen.availHeight+"</td\
</tr>\
<tr>\
	<td>window.screen.colorDepth:</td>\
	<td>"+window.screen.colorDepth+"</td\
</tr>\
<tr>\
	<td>window.screen.orientation.type:</td>\
	<td>"+window.screen.orientation.type+"</td\
</tr>\
<tr>\
	<td>window.navigator.appCodeName:</td>\
	<td>"+window.navigator.appCodeName+"</td\
</tr>\
<tr>\
	<td>window.navigator.appName:</td>\
	<td>"+window.navigator.appName+"</td\
</tr>\
<tr>\
	<td>window.navigator.userAgent:</td>\
	<td>"+window.navigator.userAgent+"</td\
</tr>\
<tr>\
	<td>window.navigator.javaEnabled()</td>\
	<td>"+window.navigator.javaEnabled()+"</td\
</tr>\
<tr>\
	<td>window.navigator.onLine:</td>\
	<td>"+window.navigator.onLine+"</td\
</tr";
table.innerHTML += content;


