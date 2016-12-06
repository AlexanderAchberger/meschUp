
const spawnSync = require('child_process').spawnSync;
var express = require("express");
var multer = require('multer'); // v1.0.5
var bodyParser = require('body-parser');

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


port = parseInt(process.env.PORT, 10) || 8090;
app.get("/", function (req, res) {
        res.redirect("/index.html");
});


// routes will go here


app.use(express.static(__dirname + '/public'));
console.log("Simple static server listening at http://localhost:" +
port);
app.listen(port,'192.169.7.1' || 'localhost');
//,'192.169.7.43' || 'localhost'
var html_dir = __dirname + '/public/';
var data;
//,'192.169.7.43' || 'localhost'
app.get('/gauge', function(req, res) {
  var size = req.query.size;
  if(size == undefined) size = 300;
  var value = req.query.value;
  var label = req.query.label;  
  var type = req.query.type;
  var min = req.query.min;
  var max = req.query.max;
  var bgcolor = req.query.bgcolor;
  console.log(type);
  var sizestring ="";
  var valuestring ="";
  var labelstring ="";
  var typestring ="";
  var minstring ="";
  var maxstring ="";
  var bgcolorsting ="";
  var paramcouter = 0;
  if(size != undefined) {sizestring = "&size=" + size; paramcouter = paramcouter + 1;}
  if(min != undefined) {minstring = "&min=" + min; paramcouter = paramcouter + 1;}
  if(max != undefined) {maxstring = "&max=" + max; paramcouter = paramcouter + 1;}
  if(value != undefined) {valuestring = "&value=" + value; paramcouter = paramcouter + 1;}
  if(label != undefined) {labelstring = "&label=" + label; paramcouter = paramcouter + 1;}
  if(type != undefined) {typestring = "&type=" + type; paramcouter = paramcouter + 1;}
  if(bgcolor != undefined) {bgcolorsting = "&bgcolor=" + bgcolor; paramcouter = paramcouter + 1;}
  var paramstring = "";
  var parmstringpng ="";
  if (paramcouter != 0) paramstring = "?" + sizestring + valuestring + labelstring + typestring + bgcolorsting + minstring + maxstring; 
  if (paramcouter != 0) paramstringpng = "?" + sizestring + valuestring + labelstring + bgcolorsting + minstring + maxstring;
  if (type != "png") {
	res.sendFile(html_dir + 'gauge.html');
	res.redirect("/gauge.html" + paramstring);
  }
  else {
	//start phantom as child_process
	console.log("Start phantom");
	var url = html_dir + 'gauge.html' + paramstringpng;
	//var url = 'http://192.169.7.1:8090/gauge' + paramstringpng;
	var phantom = spawnSync('phantomjs', ['rasterize.js',url, size, 'gauge']);
	console.log("end phantom");
	
		
	res.sendFile(html_dir + '/images/gauge.png');
    }
  });
app.get('/linechartdata', function(req, res) {
	console.log("Send data to html: " + data.name);
	res.json(data);
});
  
app.get('/linechart', function(req, res) {
  var size = req.query.size;
  if(size == undefined) size = 600;
  var label = req.query.label;  
  var type = req.query.type;
  var bgcolor = req.query.bgcolor;
  var sizestring ="";
  var labelstring ="";
  var typestring ="";
  var bgcolorsting ="";
  var paramcouter = 0;
  if(size != undefined) {sizestring = "&size=" + size; paramcouter = paramcouter + 1;}
  if(label != undefined) {labelstring = "&label=" + label; paramcouter = paramcouter + 1;}
  if(type != undefined) {typestring = "&type=" + type; paramcouter = paramcouter + 1;}
  if(bgcolor != undefined) {bgcolorsting = "&bgcolor=" + bgcolor; paramcouter = paramcouter + 1;}
  var paramstring = "";
  var parmstringpng ="";
  if (paramcouter != 0) paramstring = "?" + sizestring + labelstring + typestring + bgcolorsting; 
  if (paramcouter != 0) paramstringpng = "?" + sizestring + labelstring + bgcolorsting;
  if (type != "png") {
	res.sendFile(html_dir + 'linechart.html');
	res.redirect("/linechart.html" + paramstring);
  }
  else {
	//start phantom as child_process
	console.log("Start phantom");
	var url = html_dir + 'linechart.html' + paramstringpng;
	//var url = 'http://192.169.7.1:8090/gauge' + paramstringpng;
	var phantom = spawnSync('phantomjs', ['rasterize.js',url, size, 'linechart']);
	console.log("end phantom");
	
		
	res.sendFile(html_dir + '/images/linechart.png');
    }
  });
  
app.post('/linechart', function(req, res) { 
	
	console.log("get a post" + data);
	data = req.body;
	console.log(data);
	//res.sendFile(html_dir + 'gauge.html');
	//res.redirect("/gauge.html");
	//res.sendFile(html_dir + 'linechart.html');
	res.redirect("/linechart.html");
}); 


//to get the parameter directly from the route
// http://localhost:8080/api/1
  app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });