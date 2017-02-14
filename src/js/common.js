/**
 * resize only width
 * */
var resizeByWidth = true;

var prevWidth = -1;
$(window).resize(function () {
	var currentWidth = $('body').outerWidth();
	resizeByWidth = prevWidth != currentWidth;
	if(resizeByWidth){
		$(window).trigger('resizeByWidth');
		prevWidth = currentWidth;
	}
});
/*resize only width end*/

/**
 * device detected
 * */
var DESKTOP = device.desktop();
//console.log('DESKTOP: ', DESKTOP);
var MOBILE = device.mobile();
//console.log('MOBILE: ', MOBILE);
var TABLET = device.tablet();
//console.log('MOBILE: ', MOBILE);
/*device detected end*/

/**
 *  placeholder
 *  */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/**
 * print
 * */
function printShow() {
	$('.view-print').on('click', function (e) {
		e.preventDefault();
		window.print();
	})
}
/*print end*/

/**
 * sliders
 * */
function slidersInit() {
	//images slider
	var $imagesSlider = $('.images-slider__list');

	if($imagesSlider.length){
		var slideCounterTpl = '' +
			'<div class="slider__counter">' +
			'<span class="slide__curr">0</span> / <span class="slide__total">0</span>' +
			'</div>';

		$imagesSlider.each(function () {
			var $currentSlider = $(this);

			var $sliderWrap = $currentSlider.closest('.images-slider'),
				$slideTitle = $sliderWrap.find('.flashes__item');

			$currentSlider.on('init', function (event, slick) {
				$(slick.$slider).append($(slideCounterTpl).clone());

				$('.slide__total', $(slick.$slider)).text(slick.$slides.length);
				$('.slide__curr', $(slick.$slider)).text(slick.currentSlide + 1);
			});

			$currentSlider.slick({
				fade: true,
				speed: 200  ,
				slidesToShow: 1,
				slidesToScroll: 1,
				// initialSlide: 2,
				lazyLoad: 'ondemand',
				infinite: true,
				dots: false,
				arrows: true
			}).on('beforeChange', function (event, slick, currentSlide, nextSlider) {
				// changeUnit(slick.$slides[nextSlider]);
			}).on('afterChange reInit', function(event, slick, currentSlide, nextSlide) {
				$('.slide__curr', $(slick.$slider)).text(currentSlide + 1);

				$slideTitle.hide();
				$slideTitle.eq(currentSlide).fadeIn();
			});

		});
	}
}
/*sliders end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	printShow();
	slidersInit();
});