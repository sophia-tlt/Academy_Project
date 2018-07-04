function pic() {
	let pictureParent = document.getElementsByClassName('pictureParent')[0],
		pictureParentDiv = document.getElementsByClassName('pictureParentDiv'),
		myModal = document.getElementById('myModal'),
		closePic = document.getElementsByClassName('closePic')[0],
		picAction = document.getElementsByClassName('picAction'),
		modalContent = document.getElementsByClassName('modal_content')[0];

		
		for (let i=0; i<picAction.length; i++) {
			picAction[i].addEventListener('click', function(event) {
				event.preventDefault();
    			myModal.style.display = "block";
				let attr = picAction[i].getAttribute('href');
				modalContent.setAttribute('src', attr);
			});
			

			closePic.addEventListener('click', function() {
    			myModal.style.display = "none";
			});


			pictureParent.addEventListener('click', function(event){
    			myModal.style.display = "none";
			});
		
		
		
}
}
module.exports = pic;