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
            let res = /[^\d]/g.exec(this.value);
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
			if (j % 2 == 0 || j === 19) {
				inputCalc[j].addEventListener('keypress', function() {
        			setTimeout(() => {
            			let resA = /[^a-zA-Zа-яА-Я0-9]/g.exec(this.value);
            			this.value = this.value.replace(resA, '');
        			}, 0);
    			});
			} else{
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

		function clear () {
			for (let k=0; k<balconChoose.length;k++) {
				bigImgChoose[k].style.display = 'none';
			}
		};

		for (let t=0;t<balconChoose.length; t++) {
			balconChoose[t].addEventListener('click', function(){
				clear();
				bigImgChoose[t].style.display = 'block';
				for(let y=0; y<balconChoose.length; y++) {
						balconChoose[y].style.width = '40%';
					}
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
function ajaxForm () {
	for (let g = 16; g<inputCalc.length; g++) {

	inputCalc[g].addEventListener('submit', function (event) {
		event.preventDefault();
		form[g].appendChild(statusMessage);

	//Ajax
	let request = new XMLHttpRequest();
	request.open("POST",'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	const formData = new FormData(form);
			let jsonObject = {
				allInput: inputCalc[g],
				checkbox: inputs[b],
			};
			for (const [key,value] of formData.entries()) {
				jsonObject[key] = value;
			}

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

	ajaxForm();

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
let imgSmall = document.querySelectorAll('.works .row a'),
	imgBig = document.querySelectorAll('.works .row a'),
	overlay = document.createElement('div');

	overlay.classList.add('overlay');

	document.body.insertBefore(overlay, document.body.children[0]);
	let img = document.createElement('IMG');
	img.classList.add('big-img');
	overlay.insertBefore(img, overlay.children[0]);


	for (let i=0; i<imgSmall.length; i++) {
		imgSmall[i].addEventListener('click', function(event) {
			event.preventDefault();
			overlay.style.display = 'block';
			img.setAttribute('src', imgSmall[i].href);
		})
	}

	document.body.addEventListener('click', function(event){
		if(event.target==overlay){
			overlay.style.display = 'none';
		}
	})


}
module.exports = pic;
},{}],5:[function(require,module,exports){
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
},{"./ajax_form.js":1,"./calc.js":2,"./modalBtn.js":3,"./pic.js":4,"./tabs.js":6,"./timer.js":7}],6:[function(require,module,exports){
function tabs() {
  var noClick = document.querySelectorAll('.no_click'),
          decor = document.querySelector('.decoration'),
          decorItem = document.getElementsByClassName('decoration_item'),
          decorA = document.querySelectorAll('.no_click>a'),
          decorContent = document.querySelectorAll('.tabContent2');
          //decorContent = document.querySelectorAll('.decor_content');

          console.log(noClick);
          //console.log(decor);
          //console.log(decorItem);
          //console.log(decorA);
          console.log(decorContent);


      function showTabClass(a) {
        for (var t = 0; t < noClick.length; t++) {
          noClick[t].classList.remove('after_click');
          decorContent[t].style.display = 'none';
        }
        noClick[a].classList.add('after_click');
        decorContent[a].style.display = 'block';
      }

      decor.addEventListener('click', function (event) {
        var target = event.target;
        if (target.parentElement.classList.contains('no_click')) {
          for (var i = 0; i < decorA.length; i++) {
            if (target == decorA[i]) {
              showTabClass(i);
              break;
            }
          }
        }
      });
      
var glazingSlider = document.querySelector('.glazing_slider'),
          glazingSliderA = document.querySelectorAll('.glazing_block>a'),
          glazingRow = document.querySelectorAll('.tabContent');

      glazingSlider.addEventListener('click', function (event) {
        var target = event.target;
        if (target.parentElement.classList.contains('glazing_block')) {
          for (var i = 0; i < glazingSliderA.length; i++) {
            if (target == glazingSliderA[i]) {
              for (var t = 0; t < glazingSliderA.length; t++) {
                glazingSliderA[t].classList.remove('active');
                glazingRow[t].style.display = 'none';
              }
              glazingSliderA[i].classList.add('active');
              glazingRow[i].style.display = 'block';
              break;
            }
          }
        }
      });
    }

module.exports = tabs;
},{}],7:[function(require,module,exports){
function timer() {
	let deadline = '2018-07-7';

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
},{}]},{},[5]);
