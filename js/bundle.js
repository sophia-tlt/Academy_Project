(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

	for (let j = 0; j< input.length; j++) {
		input[j].value = '';
	}
});
}
}

module.exports = form;
},{}],2:[function(require,module,exports){
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

	for (let j = 0; j< input.length; j++) {
		input[j].value = '';
	}
});
};
}


module.exports = calc;
},{}],3:[function(require,module,exports){
function modalBtn() {
let engineerBtn = document.getElementsByClassName('popup_engineer_btn')[0],
	popupEngineer = document.getElementsByClassName('popup_engineer')[0],
	close = document.getElementsByClassName('popup_close')[1],
	popupChild = document.getElementsByClassName('popup_dialog'),
	phone = document.getElementsByClassName('phone_link'),
	popup = document.getElementsByClassName('popup')[0],
	popupClose = document.getElementsByClassName('popup_close')[0];
	
//popupEngineer
engineerBtn.addEventListener('click', function() {
    popupEngineer.style.display = "block";
	popupChild[1].onclick = function (event) {
    event.stopPropagation();
	};
	document.onmousewheel = function (event) {
  		event.preventDefault();
	}
});

close.addEventListener('click', function() {
    popupEngineer.style.display = "none";
    document.onmousewheel = function (event) {
  		return true;
	}
});


popupEngineer.addEventListener('click', function(event){
    popupEngineer.style.display = "none";
    document.onmousewheel = function (event) {
  		return true;
	}
});


//popup
for (let i=0; i<phone.length; i++) {
	phone[i].addEventListener('click', function() {
    	popup.style.display = "block";
		popupChild[0].onclick = function (event) {
    	event.stopPropagation();
		};
		document.onmousewheel = function (event) {
  			event.preventDefault();
		}
	});
}
popupClose.addEventListener('click', function() {
    popup.style.display = "none";
    document.onmousewheel = function (event) {
  		return true;
	}
});


popup.addEventListener('click', function(event){
    popup.style.display = "none";
    document.onmousewheel = function (event) {
  		return true;
	}
});


}

module.exports = modalBtn;
},{}],4:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {
	let modalBtn = require('./modalBtn.js');
	let form = require('./ajax_form.js');
	let tabs = require('./tabs.js');
	let calc = require('./calc.js');




	modalBtn();
	form();
	tabs();
	calc();
})
},{"./ajax_form.js":1,"./calc.js":2,"./modalBtn.js":3,"./tabs.js":5}],5:[function(require,module,exports){
function tabs() {
	let menu = document.getElementsByClassName('glazing_block'),
		parent = document.getElementsByClassName('glazing')[0],
		blockContent = parent.getElementsByClassName('row'),
		head = document.getElementsByClassName('glazing_slider')[0];

function hideTabContent (a) {              
			for (let i = a; i<blockContent.length;i++) {
				blockContent[i].classList.remove('active');
				blockContent[i].classList.add('noactive');
			}
		}

		hideTabContent(1);


 //функция показывания табов
		function showTabContent (b) {
			if (blockContent[b].classList.contains('noactive')) {
				hideTabContent(0);
				blockContent[b].classList.remove('noactive');
				blockContent[b].classList.add('active');
			}
		}


 //при помощи делегирования мы назначили на каждый таб событие
		head.addEventListener('click', function(event) {
			let target = event.target; //объявляем событие что мы куда то кликнули
			if (target.className == 'glazing_block') { //событие - это нажатие на вкладку(таб)
				for (let j=3; j<menu.length; j++) { //делаем счетчик для перебора всех вкладок которые у нас есть
					if (target == menu[j]) { //проверяем на какую именно вкладку кликнули.То есть событие target сопоставляем с вкладкой
						showTabContent(j);  // если на эту вкладку кликнули, тогда показываем наш контент
						break; 
					}
				}
			}
		})




}

module.exports = tabs;
},{}]},{},[4]);
