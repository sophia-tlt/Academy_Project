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