var os = require('os')
var color = require('colors')

var secToHrs = require('./TimeFormat.js');

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();
	console.log('System:'.gray, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime: ~'.green, secToHrs.print());
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;