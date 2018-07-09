window.addEventListener('DOMContentLoaded', function () {
	let modalBtn = require('./modalBtn.js');
	let form = require('./ajax_form.js');
	let tabs = require('./tabs.js');
	let calc = require('./calc.js');
	let pic = require('./pic.js');
	let timer = require('./timer.js');
	
	modalBtn();
	form();
	tabs();
	calc();
	pic();
	timer();
})