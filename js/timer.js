function timer() {
	let deadline = '2018-07-5';

function getTimeRemaining(endTime) {  
	let t = Date.parse(endTime) - Date.parse(new Date()), 
		seconds = Math.floor( (t/1000) %60 ), 
		minutes = Math.floor( (t/1000/60) %60 ), 
		hours = Math.floor( (t/(1000*60*60)) %24),
		days = Math.floor(t/(1000*60*60*24));
		return {  
			'total': t, 
			'days': days,
			'hours': hours,
			'minutes':minutes, 
			'seconds':seconds
		};
		}

function setClock (id, endTime) { 
	let timer = document.getElementById(id),
		days = timer.querySelector('.timer-days'),
		hours = timer.querySelector('.hours'), 
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(updateClock,1000);  

	function updateClock() {   
		let t = getTimeRemaining(endTime);  
		days.innerHTML = t.days;
			if (t.days<10) {
				days.innerHTML = '0'+t.days;
			};
		hours.innerHTML = t.hours;
			if (t.hours<10) {
				hours.innerHTML = '0'+ t.hours;
			};
		minutes.innerHTML = t.minutes;
			if (t.minutes<10) {
				minutes.innerHTML = '0'+t.minutes;
			};
		seconds.innerHTML = t.seconds;
			if (t.seconds<10) {
				seconds.innerHTML = '0'+t.seconds;
			};

		if (t.total <=0) {
			clearInterval(timeInterval);
			days.innerHTML = '00';
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
		}

	}

	updateClock();
}

setClock('timer', deadline);
}


module.exports = timer;