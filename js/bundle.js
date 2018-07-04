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
			});

			close.addEventListener('click', function() {
    			popupCalc.style.display = "none";
    			document.onmousewheel = function (event) {
  					return true;
				}
			});

		};

		for (let j=0; j<inputCalc.length; j++) {
			if (j % 2 == 0) {
				inputCalc[j].addEventListener('keypress', function() {
        			setTimeout(() => {
            			let resA = /[^a-zA-Zа-яА-Я0-9]/g.exec(this.value);
            			this.value = this.value.replace(resA, '');
        			}, 0);
    			});
			} else {
				inputCalc[j].addEventListener('keypress', function() {
        			setTimeout(() => {
            			let res = /[^\d]/g.exec(this.value);
            			this.value = this.value.replace(res, '');
        			}, 0);
    			});
			};
		};
			inputCalc[16].addEventListener('keypress', function() {
        		setTimeout(() => {
            		let res = /[^\d]/g.exec(this.value);
            		this.value = this.value.replace(res, '');
        		}, 0);
    		});
			let UserName = document.getElementsByClassName('UserName')[0];
			 	UserName.addEventListener('keypress', function() {
        			setTimeout(() => {
            			let resA = /[^a-zA-Zа-яА-Я0-9]/g.exec(this.value);
            			this.value = this.value.replace(resA, '');
        			}, 0);
    			});

		function clear () {
			for (let k=0; k<balconChoose.length;k++) {
				bigImgChoose[k].style.display = 'none';
			}
		};

		for (let t=0;t<balconChoose.length; t++) {
			balconChoose[t].addEventListener('click', function(){
				clear();
				bigImgChoose[t].style.display = 'block';
			});
		};

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


let inputs = calcProfile.getElementsByClassName("checkbox");
	function clearAttr () {
		for (let a=0; a<inputs.length; a++) {
			inputs[a].removeAttribute('checked');
		}
	};

		for (let b=0; b<inputs.length; b++) {
			inputs[b].addEventListener('click', function() {
				clearAttr();
				inputs[b].setAttribute('checked', 'cheked');
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

		let userName = calcEnd.getElementsByClassName('form-control')[0];
		userName.addEventListener('keypress', function() {
        		setTimeout(() => {
            		let res = /[^a-zA-Zа-яА-Я0-9]/g.exec(this.value);
            		this.value = this.value.replace(res, '');
        		}, 0);
    		});


//form
for (let g = 16; g<inputCalc.length; g++) {
	
		let input = new Object();
			input = {
				allInput: inputCalc[g],
				checkbox: inputs[b],

			};
	inputCalc[g].addEventListener('submit', function (event) {
		event.preventDefault();
		form[g].appendChild(statusMessage);

	//Ajax
	let request = new XMLHttpRequest();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(input);

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
	};

	for (let p = 0; p< input.length; p++) {
		input[p].value = '';
	};
	});
};

}
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

//modal after 1min
function afterMin () {
	popup.style.display = "block";
		popupChild[0].onclick = function (event) {
    	event.stopPropagation();
		};
		document.onmousewheel = function (event) {
  			event.preventDefault();
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
};

setTimeout(afterMin, 60000);
}

module.exports = modalBtn;
},{}],4:[function(require,module,exports){
function pic() {
	let pictureParent = document.getElementsByClassName('pictureParent')[0],
		pictureParentDiv = document.getElementsByClassName('pictureParentDiv'),
		myModal = document.getElementsByClassName('myModal')[0],
		modalImg = document.getElementById('img01'),
		closePic = document.getElementsByClassName('closePic')[0];
		

		for (let j=0; j<pictureParentDiv.length; j++) {
			let picture = pictureParentDiv[j].getElementsByTagName('a');  //получаем все ссылки
			for (let i=0; i<picture.length; i++) {
				picture[i].setAttribute('data-fancybox', 'gallery'); //присваиваем каждой ссылке атрибут
				/*let pictureImg = picture[i].getElementsByClassName('myPic'); //получаем все img
				for(let g=0; g<pictureImg.length; g++){*/
					let attr = picture[i].getAttribute('href')
					picture[i].addEventListener('click', function () { //создаем функцию вызова модального окна
						myModal.style.display = 'block'; //показываем 
						event.stopPropagation();
						document.onmousewheel = function (event) { //запрещаем прокрутку страницы
  							event.preventDefault();
						}
						let modalContent = document.getElementsByClassName('modal_content')[0];
							modalContent.setAttribute('href',attr); //присваиваем каждому модальному окну его картинку
						
					});

					closePic.addEventListener('click', function() {
    					myModal.style.display = "none";
    					document.onmousewheel = function (event) {
  						return true;
						}
					});


					pictureParent.addEventListener('click', function(event){
    					myModal.style.display = "none";
    					document.onmousewheel = function (event) {
  							return true;
						}
					});
				//}
			}
		}
		
		
		

}
module.exports = pic;
},{}],5:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {
	let modalBtn = require('./modalBtn.js');
	let form = require('./ajax_form.js');
	let tabs = require('./tabs.js');
	let calc = require('./calc.js');
	let pic = require('./pic.js');



	modalBtn();
	form();
	tabs();
	calc();
	pic();
})
},{"./ajax_form.js":1,"./calc.js":2,"./modalBtn.js":3,"./pic.js":4,"./tabs.js":6}],6:[function(require,module,exports){
function tabs() {
	let tab = document.getElementsByClassName('tab'),
		tabContent = document.getElementsByClassName('tabContent'),
		tabClick = document.getElementsByClassName('tabClick')[0];

		function hideTabContent (a) {              
			for (let i = a; i<tabContent.length;i++) {
				tabContent[i].classList.remove('active');
				tabContent[i].classList.add('noactive');
			}
		}

		hideTabContent(1);

		function showTabContent (b) {
			if (tabContent[b].classList.contains('noactive')) {
				hideTabContent(0);
				tabContent[b].classList.remove('noactive');
				tabContent[b].classList.add('active');
				}
			}
		
		tabClick.addEventListener('click', function(event) {
			let target = event.target; 
			if (target.className == 'tab') { 
				for (let j=0; j<tab.length; j++) { 
					if (target == tab[j]) { 
						showTabContent(j);  
						break; 
					}
				}
			}
		});


	let tab2 = document.getElementsByClassName('tab2'),
		tabContent2 = document.getElementsByClassName('tabContent2'),
		tabClick2 = document.getElementsByClassName('tabClick2')[0];

		function hideTabDecoration (a) {              
			for (let e = a; e<tabContent2.length;e++) {
				tabContent2[e].classList.remove('active');
				tabContent2[e].classList.add('noactive');
			}
		}

		hideTabDecoration(1);

		function showTabDecoration (c) {
			if (tabContent2[c].classList.contains('noactive')) {
				hideTabDecoration(0);
				tabContent2[c].classList.remove('noactive');
				tabContent2[c].classList.add('active');
				}
			}
		
		tabClick2.addEventListener('click', function(event) {
			let target = event.target; 
			if (target.className == 'tab2') { 
				for (let q=0; q<tab2.length; q++) { 
					if (target == tab2[q]) { 
						showTabDecoration(q);  
						break; 
					}
				}
			}
		})



}


module.exports = tabs;
},{}]},{},[5]);
