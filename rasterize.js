"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, sizex, sizey, name;
	address = system.args[1];
	sizex = system.args[2];
	sizey = system.args[3];
	name = system.args[4];
	page.settings.resourceTimeout = 2000;
    page.open(address, function () {
				console.log('Success');
				page.clipRect = { top: 0, left: 0, width: sizex, height: sizey };
                page.render('public/images/' + name + '.png');
                phantom.exit();        
    });
