drawGraph = function(studData) {
	if(typeof studData != "undefined") {

		var Labels = studData.days;
		var count = studData.num;


		var ctx = document.getElementById("graph").getContext("2d");
		var myChart = new Chart(ctx, {
			type : 'line',
			data : {
				labels : Labels,
				datasets : [
					{
						label : "Number of Students Above 75% Attendance",
						fill : false,
						backgroundColor: "rgba(75,192,192,0.4)",
			            borderColor: "rgba(75,192,192,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(75,192,192,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(75,192,192,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: count,
			            spanGaps: false,
					}
				]
			}
		});
		
	} 	
};

chrome.tabs.query({active: true, currentWindow : true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {type: "getCount"}, drawGraph);
});
