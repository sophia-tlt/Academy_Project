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