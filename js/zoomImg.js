const galleryImages = document.querySelectorAll('.gallery img');
const zoomBox = document.querySelector('.zoomBox');
const zoomBoxImage = zoomBox.querySelector('img');
const closeBtn = zoomBox.querySelector('.closeBtn');

galleryImages.forEach((image) => {
	image.addEventListener('click', function () {
		zoomBoxImage.src = this.src;
		zoomBox.style.display = 'flex';
	});
});

let zoomed = false;

zoomBoxImage.addEventListener('click', function () {
	if (zoomed) {
		zoomBoxImage.style.transform = 'scale(1)';
		zoomBoxImage.style.cursor = 'zoom-in';
	} else {
		zoomBoxImage.style.transform = 'scale(2)';
		zoomBoxImage.style.cursor = 'zoom-out';
	}
	zoomed = !zoomed;
});

closeBtn.addEventListener('click', function () {
	zoomBox.style.display = 'none';
	zoomBoxImage.style.transform = 'scale(1)';
	zoomBoxImage.style.cursor = 'zoom-in';
});
