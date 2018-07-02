function calc () {
let calcBtn = document.getElementsByClassName('glazing_price_btn'),
	popupCalc = document.getElementsByClassName('popup_calc')[0],
	popupChild = document.getElementsByClassName('popup_dialog'),
	close = document.getElementsByClassName('popup_calc_close')[0],
	inputCalc = document.getElementsByClassName('form-control'),
	balconIcons = document.getElementsByClassName('balcon_icons')[0],
	balconChoose = balconIcons.getElementsByTagName('img'),
	bigImg = document.getElementsByClassName('big_img')[0],
	bigImgChoose = bigImg.getElementsByTagName('img'),
	furtherBtn = document.getElementsByClassName('popup_calc_button')[0],
	calcProfile = document.getElementsByClassName('popup_calc_profile')[0],
	calcProfileClose = document.getElementsByClassName('popup_calc_profile_close')[0],
	checkBox = document.getElementsByClassName('checkbox'),
	furtherEndBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
	calcEnd = document.getElementsByClassName('popup_calc_end')[0],
	calcEndClose = document.getElementsByClassName('popup_calc_end_close')[0],
	form = document.getElementsByClassName('form'),
	message = new Object();
	message.loading = "Ожидание...";
	message.success = "Спасибо! Ваши замеры приняты",
	message.failure = "Что то пошло не так...";

//popup_calc
	for (let i=0; i<calcBtn.length; i++) {
		calcBtn[i].addEventListener('click', function () {
			popupCalc.style.display = "block";
			popupChild[2].onclick = function (event) {
    			event.stopPropagation();
			};
			document.onmousewheel = function (event) {
  				event.preventDefault();
			}
		})

		close.addEventListener('click', function() {
    		popupCalc.style.display = "none";
    		document.onmousewheel = function (event) {
  				return true;
			}
		});

	}

	for (let j=0;j<inputCalc.length; j++) {
			inputCalc[j].addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^\d]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });
	}

	for (let k=0; k<balconChoose.length;k++) {

		balconChoose[k].addEventListener('click', function() {
			balconChoose[k].classList.toggle('calcSize');
			bigImgChoose[k].style.display = 'block';
			balconChoose[k-1].classList.remove('calcSize');
			bigImgChoose[k-1].style.display = 'none';
		});
	}

//calc_profile
	furtherBtn.addEventListener('click', function() {
		popupCalc.style.display = "none";
		calcProfile.style.display = "block";
		popupChild[3].onclick = function (event) {
    		event.stopPropagation();
		};
			document.onmousewheel = function (event) {
  				event.preventDefault();
			}
		});

		calcProfileClose.addEventListener('click', function() {
    		calcProfile.style.display = "none";
    		document.onmousewheel = function (event) {
  				return true;
			}
		});
		
		checkBox[0].addEventListener('click', function() {
			checkBox[0].setAttribute('checked','checked');
			checkBox[1].removeAttribute('checked');
		});

		checkBox[1].addEventListener('click', function() {
			checkBox[1].setAttribute('checked','checked');
			checkBox[0].removeAttribute('checked');
		});

//calc_end
	furtherEndBtn.addEventListener('click', function() {
		calcProfile.style.display = "none";
		calcEnd.style.display = "block";
		popupChild[4].onclick = function (event) {
    		event.stopPropagation();
		};
			document.onmousewheel = function (event) {
  				event.preventDefault();
			}
		});

		calcEndClose.addEventListener('click', function() {
    		calcEnd.style.display = "none";
    		document.onmousewheel = function (event) {
  				return true;
			}
		});


//form
for (let g = 0; g<form.length; g++) {
	let input = form[g].getElementsByTagName('input');

	form[g].addEventListener('submit', function (event) {
		event.preventDefault();
		form[g].appendChild(statusMessage);

	//Ajax
	let request = new XMLHttpRequest();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4 ) {
			statusMessage.innerHTML = message.loading;
		} else if(request.readyState === 4 ) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
			}
			else {
				statusMessage.innerHTML = message.failure;
			}
		}
		
		function func () {
			statusMessage.style.display = 'none'
		}
		setTimeout(func, 3000);
	}

	for (let p = 0; p< input.length; p++) {
		input[p].value = '';
	}


});
};
}


module.exports = calc;