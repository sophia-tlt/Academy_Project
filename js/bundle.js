(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function modalBtn() {
let engineerBtn = document.getElementsByClassName('popup_engineer_btn')[0],
	popupEngineer = document.getElementsByClassName('popup_engineer')[0],
	close = document.getElementsByClassName('popup_close')[1],
	overlay = document.getElementsByClassName('row'),
	phone = document.getElementsByClassName('phone_link'),
	popup = document.getElementsByClassName('popup')[0];

//popupEngineer
function onClick(e, popupEngineer) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  while (target.parentNode && target.tagName.toLowerCase() != 'body') {
    if (target == engineerBtn) {
    engineerBtn.addEventListener('click', function () { 
		popupEngineer.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.onmousewheel = function (event) {
  			event.preventDefault();
		}
	});
      return;
    }

    target = target.parentNode;
  }

  	popupEngineer.style.display = 'none';
	document.body.style.overflow = '';
	document.onmousewheel = function (event) {
  		return true;
	}
}

//popup
function onClickPopup(e, popup) {
  e = e || window.event;
  var target = e.target || e.srcElement;
	while (target.parentNode && target.tagName.toLowerCase() != 'body') {
		for (let i=0; i<phone.length; i++) {
			if (target == phone[i]) {
    			phone[i].addEventListener('click', function () { 
					popup.style.display = 'block';
					document.body.style.overflow = 'hidden';
					document.onmousewheel = function (event) {
  					event.preventDefault();
					}
				});
      		return;
    		}
    	};
    		target = target.parentNode;
	}

  	popup.style.display = 'none';
	document.body.style.overflow = '';
	document.onmousewheel = function (event) {
  		return true;
	}
};


document.onclick = function(e) {
  onClick(e, popupEngineer);
  onClickPopup(e, popup);
};

}

module.exports = modalBtn;
},{}],2:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {
	let modalBtn = require('./modalBtn.js');






	modalBtn();
})
},{"./modalBtn.js":1}]},{},[2]);
