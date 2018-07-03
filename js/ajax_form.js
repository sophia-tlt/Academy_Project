function form() {
	let message = new Object();
	message.loading = "Ожидание...";
	message.success = "Спасибо! C Вами свяжется специалист!",
	message.failure = "Что то пошло не так...";
	form = document.getElementsByClassName('form'),
	statusMessage = document.createElement('div'),
	inputPhone = document.getElementsByName('user_phone');
	statusMessage.classList.add('status');
	
for (let j = 0; j<inputPhone.length; j++) {
	inputPhone[j].addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^\d]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });
}

for (let i = 0; i<form.length; i++) {
	let input = form[i].getElementsByTagName('input');
	form[i].addEventListener('submit', function (event) {
		event.preventDefault();
		form[i].appendChild(statusMessage);
		statusMessage.style.display = 'block';

	//Ajax
	let REQUEST = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	let request = new REQUEST();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function() {

		if (request.readyState < 4 ) {
			statusMessage.style.display = 'block';
			statusMessage.innerHTML = message.loading;
		} else if(request.readyState === 4 ) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.style.display = 'block';
				statusMessage.innerHTML = message.success;
			}
			else {
				statusMessage.style.display = 'block';
				statusMessage.innerHTML = message.failure;
			}
		}
		
		function func () {
			statusMessage.remove();
		}
		setTimeout(func, 3000);
	}

	for (let j = 0; j< input.length; j++) {
		input[j].value = '';
	}
});
}
}

module.exports = form;