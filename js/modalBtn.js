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