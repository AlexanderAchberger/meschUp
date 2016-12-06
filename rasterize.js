"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, size, name;
	address = system.args[1];
	size = system.args[2];
	name = system.args[3];
    page.open(address, function () {
				console.log('Success');
				page.clipRect = { top: 0, left: 0, width: size, height: size };
                page.render('public/images/' + name + '.png');
                phantom.exit();        
    });
