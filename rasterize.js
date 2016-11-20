"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, size;
	address = system.args[1];
	size = system.args[2];
	
    page.open(address, function () {
				console.log('Success');
				page.clipRect = { top: 0, left: 0, width: size, height: size };
                page.render('public/images/gauge.png');
                phantom.exit();        
    });

	//page.open('http://192.169.7.1:8090/sendpicture' , function () {
    //            phantom.exit();        
    //});