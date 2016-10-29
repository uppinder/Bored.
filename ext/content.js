var numOfdays      = document.getElementsByTagName("th").length-3;
var numOfStud = document.getElementsByTagName("tr").length-1;

/* Calculate Number of students above 75%*/
/* -------------------------------------------------------------------------------------*/
var num = new Array(numOfdays);
for(var i = 0;i < numOfdays;++i)
	num[i] = 0;

for(var i = 1;i < numOfStud;i++) {
	var s,p = 0;
	for(var j = numOfdays+2,k = 1;j >= 3;--j,++k) {
		s = document.getElementById("t01").children[1].children[i].childNodes[j].innerHTML;	
		
		if(s == "P")
			++p;

		var percent = p/k;
		num[k-1] += (percent >= 0.75? 1:0);		
	}
}
/*----------------------------------------------------------------------------------------*/

/*Store the days of the class*/
/* -------------------------------------------------------------------------------------*/
var days = new Array(numOfdays);
for(var j = numOfdays+2,k = 0;j >= 3;--j,++k) {
	days[k] = document.getElementById("t01").children[0].children[0].childNodes[j].innerHTML;
} 
/*----------------------------------------------------------------------------------------*/

// console.log(days);

var data = {num : num, days : days};

// console.log(data);

chrome.runtime.onMessage.addListener(
	function(msg, sender, response) {
		if(msg.type == "getCount") {
			response(data);
		}
	}

);