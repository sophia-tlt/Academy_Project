function tabs() {
	let menu = document.getElementsByClassName('glazing_block'),
		parent = document.getElementsByClassName('container')[0],
		blockContent = parent.getElementsByClassName('row'),
		head = document.getElementsByClassName('glazing_slider')[0];

		function hideTabContent (a) {              
			for (let i = a; i<blockContent.length;i++) {
				blockContent[i].classList.remove('active');
				blockContent[i].classList.add('noactive');
			}
		}

		hideTabContent(1);

		function showTabContent (b) {
			if (blockContent[b].classList.contains('noactive')) {
				hideTabContent(0);
				blockContent[b].classList.remove('noactive');
				blockContent[b].classList.add('active');
				}
			}
		
		head.addEventListener('click', function(event) {
			let target = event.target; 
			if (target.className == 'glazing_block') { 
				for (let j=0; j<menu.length; j++) { 
					if (target == menu[j]) { 
						showTabContent(j);  
						break; 
					}
				}
			}
		})


	let decorationMenu = document.getElementsByClassName('internal_link'),
		decorationHead = document.getElementsByClassName('decoration_slider')[0],
		decorationParent = document.getElementsByClassName('decoration_content')[0],
		decorationParentContent = decorationParent.getElementsByClassName('row')[0],
		decorationContent = decorationParentContent.getElementsByTagName('div');

		function hideTabDecoration (a) {              
			for (let e = a; e<decorationContent.length;e++) {
				decorationContent[e].classList.remove('active');
				decorationContent[e].classList.add('noactive');
			}
		}

		hideTabContent(1);

		function showTabDecoration (c) {
			if (decorationContent[c].classList.contains('noactive')) {
				hideTabDecoration(0);
				decorationContent[c].classList.remove('noactive');
				decorationContent[c].classList.add('active');
				}
			}
		
		decorationHead.addEventListener('click', function(event) {
			let target = event.target; 
			if (target.className == 'internal_link') { 
				for (let q=0; q<decorationMenu.length; q++) { 
					if (target == decorationMenu[q]) { 
						showTabDecoration(q);  
						break; 
					}
				}
			}
		})



}


module.exports = tabs;