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