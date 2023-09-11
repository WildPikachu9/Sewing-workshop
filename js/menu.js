const burger = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.active');

burger.addEventListener('click', function () {
	for (let i = 0; i < activeElement.length; i++) {
		activeElement[i].classList.toggle('show');
	}
});


$(document).ready(function(){
	$('.hash').on('click', function(e){
		if(this.hash !== ""){
			e.preventDefault();

			let hash = this.hash;
			console.log(hash);

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	})
})