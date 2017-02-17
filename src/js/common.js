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
 * toggle class for input on focus
 * */
function inputToggleFocusClass() {
	var $fieldWrap = $('.input-wrap');

	if ($fieldWrap.length) {
		var $inputsAll = $fieldWrap.find( "input, textarea, select" );
		var _classFocus = 'input--focus';

		$inputsAll.focus(function() {
			var $thisField = $(this);

			$thisField
			.closest($fieldWrap)
			.addClass(_classFocus);

		}).blur(function() {
			var $thisField = $(this);

			$thisField
			.closest($fieldWrap)
			.removeClass(_classFocus);
		});
	}
}

function inputHasValueClass() {
	var $fieldWrap = $('.input-wrap');

	if ($fieldWrap.length) {
		var $inputsAll = $fieldWrap.find( 'input[type="email"], input[type="search"], :text, textarea, select' );
		var _classHasValue = 'has--value';

		function switchHasValue() {
			var $currentField = $(this);
			var $currentFieldWrap = $currentField.closest($fieldWrap);

			$currentFieldWrap.removeClass(_classHasValue);

			//first element of the select must have a value empty ("")
			if ($currentField.val() != '') {
				$currentFieldWrap.addClass(_classHasValue);
			}
		}

		$.each($inputsAll, function () {
			switchHasValue.call(this);
		});

		$inputsAll.on('change', function () {
			switchHasValue.call(this);
		});
	}
}

function inputFilledClass() {
	var $fieldWrap = $('.js-field-effects');

	if ($fieldWrap.length) {
		var $inputsAll = $fieldWrap.find( 'input[type="email"], input[type="search"], :text, textarea, select' );
		var _classFilled = 'input--filled';

		$inputsAll.focus(function() {
			var $thisField = $(this);

			$thisField
			.closest($fieldWrap)
			.addClass(_classFilled);

		}).blur(function() {
			var $thisField = $(this);

			if ($thisField.val() == '') {
				$thisField
				.closest($fieldWrap)
				.removeClass(_classFilled);
			}
		});

		function switchHasValue() {
			var $currentField = $(this);
			var $currentFieldWrap = $currentField.closest($fieldWrap);

			$currentFieldWrap.removeClass(_classFilled);

			//first element of the select must have a value empty ("")
			if ($currentField.val() != '') {
				$currentFieldWrap.addClass(_classFilled);
			}
		}

		$.each($inputsAll, function () {
			switchHasValue.call(this);
		});

		$inputsAll.on('change', function () {
			switchHasValue.call(this);
		});
	}
}
/*toggle class for input on focus end*/

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
			'<div class="slider-counter">' +
			'<span class="slide-curr">0</span>/<span class="slide-total">0</span>' +
			'</div>';

		$imagesSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			var $sliderWrap = $currentSlider.closest('.images-slider'),
				$slideTitle = $sliderWrap.find('.flashes__item');

			$currentSlider.on('init', function (event, slick) {
				$(slick.$slider).append($(slideCounterTpl).clone());

				$('.slide-total', $(slick.$slider)).text(slick.$slides.length);
				$('.slide-curr', $(slick.$slider)).text(slick.currentSlide + 1);
			});

			$currentSlider.slick({
				fade: true,
				speed: dur  ,
				slidesToShow: 1,
				slidesToScroll: 1,
				// initialSlide: 2,
				lazyLoad: 'ondemand',
				infinite: true,
				dots: false,
				arrows: true
			}).on('beforeChange', function (event, slick, currentSlide, nextSlider) {
				// changeUnit(slick.$slides[nextSlider]);
				$('.slide-curr', $(slick.$slider)).text(nextSlider + 1);

				$slideTitle.hide();
				$slideTitle.eq(nextSlider).fadeIn(dur);
			}).on('afterChange reInit', function(event, slick, currentSlide, nextSlide) {
				// $('.slide-curr', $(slick.$slider)).text(currentSlide + 1);
				//
				// $slideTitle.hide();
				// $slideTitle.eq(currentSlide).fadeIn();
			});

		});
	}
}
/*sliders end*/

/**
 * equal height
 * */
function equalHeightInit() {
	var $files = $('.files');

	if ($files.length) {
		$files.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}
}
/*equal height end*/

/**
 * masonry
 * */
function masonryInit() {
	var $newsPreviews = $('.news-previews__list');
	if ($newsPreviews.length) {
		$newsPreviews.masonry({
			// options
			itemSelector: '.news-previews__item',
			percentPosition: true
		});
	}
}
/*masonry*/

/**
 * sidebar layout
 * */
function sidebarLayout() {
	$(window).on('load debouncedresize', function () {
		$('.sidebar-bottom').css({
			'height': $('.sidebar').outerHeight() - $('.sidebar-top').outerHeight(true)
		})
	})
}
/*sidebar layout end*/

/**
 * form success for example
 * */
function formSuccessExample() {
	var $form = $('.user-form form');

	if ( $form.length ) {

		$form.submit(function (event) {
			var $thisForm = $(this);

			if ($thisForm.parent().hasClass('success-form')) return;

			event.preventDefault();

			testValidateForm($thisForm);
		});

		// $(':text, input[type="email"], textarea', $form).on('keyup change', function () {
		// 	var $form = $(this).closest('form');
		// 	if ($form.parent().hasClass('error-form')) {
		// 		testValidateForm($form);
		// 	}
		// })

	}

	function testValidateForm(form) {
		var $thisFormWrap = form.parent();

		var $inputs = $(':text, input[type="email"], input[type="password"], textarea', form);

		var inputsLength = $inputs.length;
		var inputsHasValueLength = $inputs.filter(function () {
			return $(this).val().length;
		}).length;

		$thisFormWrap.toggleClass('error-form', inputsLength !== inputsHasValueLength);
		$thisFormWrap.toggleClass('success-form', inputsLength === inputsHasValueLength);

		$.each($inputs, function () {
			var $thisInput = $(this);
			var thisInputVal = $thisInput.val();
			var $thisInputWrap = $thisInput.parent();

			$thisInput.toggleClass('error', !thisInputVal.length);
			$thisInput.toggleClass('success', !!thisInputVal.length);

			$thisInputWrap.toggleClass('error', !thisInputVal.length);
			$thisInputWrap.toggleClass('success', !!thisInputVal.length);
		});
	}
}
/* form success for example end */

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	inputHasValueClass();
	inputFilledClass();
	printShow();
	slidersInit();
	equalHeightInit();
	masonryInit();
	// sidebarLayout();
	formSuccessExample();
});