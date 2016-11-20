google.load('visualization', '1', {'packages': ['gauge']});
	//google.setOnLoadCallback(drawChart);
	var mydata = JSON.parse(data);
	
	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
	
	function drawChart() {
		var data = google.visualization.arrayToDataTable([
			  ['Label', 'Value'],
			  ['Memory', 80]
			]);
			var urlwidth = getParameterByName('width');
			var options = {
			  width: urlwidth, 
			  height: urlwidth,
			  redFrom: mydata[0].redFrom, 
			  redTo: mydata[0].redTo,
			  yellowFrom:mydata[0].yellowFrom, 
			  yellowTo: mydata[0].yellowTo,
			  minorTicks: mydata[0].minorTicks
			};
			
		var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
		chart.draw(data, options);
	};