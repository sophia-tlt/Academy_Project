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
console.log(tab2);
console.log(tabContent2);
console.log(tabClick2);
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