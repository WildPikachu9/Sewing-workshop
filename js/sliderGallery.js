$('.slick-prev').on('click', function () {
	$('.c-testimonial-slider__previous-slide').slick('slickPrev');
	$('.c-testimonial-slider__next-slide').slick('slickPrev');
});

$('.slick-next').on('click', function () {
	$('.c-testimonial-slider__previous-slide').slick('slickNext');
	$('.c-testimonial-slider__next-slide').slick('slickNext');
});

$('.slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 760,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
