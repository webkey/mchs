/**
 * !js scroll page lock
 * */

var docElem = window.document.documentElement,
	didScroll,
	scrollPosition;

function noScrollFn() {
	window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
}

function noScroll() {
	window.removeEventListener( 'scroll', scrollHandler );
	window.addEventListener( 'scroll', noScrollFn );
}

function scrollFn() {
	window.addEventListener( 'scroll', scrollHandler );
}

function canScroll() {
	window.removeEventListener( 'scroll', noScrollFn );
	scrollFn();
}

function scrollHandler() {
	if( !didScroll ) {
		didScroll = true;
		setTimeout( function() { scrollPage(); }, 60 );
	}
}

function scrollPage() {
	scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
	didScroll = false;
}

scrollFn();
/*js scroll page lock end*/

/**
 * !resize only width
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
 * !device detected
 * */
var DESKTOP = device.desktop();
//console.log('DESKTOP: ', DESKTOP);
var MOBILE = device.mobile();
//console.log('MOBILE: ', MOBILE);
var TABLET = device.tablet();
//console.log('MOBILE: ', MOBILE);
/*device detected end*/

/**
 * !placeholder
 * */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/**
 * !toggle class for input on focus
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
 * !print
 * */
function printShow() {
	$('.view-print').on('click', function (e) {
		e.preventDefault();
		window.print();
	})
}
/*print end*/

/**
 * !toggle header
 * */
function toggleHeader(){
	// external js:
	// 1) resizeByWidth (resize only width);

	var $page = $('html');
	var $header = $('.header');
	var $headerTop = $('.header__top');
	var previousScrollTop = $(window).scrollTop();

	$(window).on('load scroll debouncedresize', function () {

		var currentScrollTop = $(window).scrollTop();
		// var minScrollTop = $header.parent().offset().top + $header.outerHeight();
		var minScrollTop = $header.outerHeight() - $headerTop.outerHeight();

		$page.toggleClass('elements-is-transform', (currentScrollTop >= minScrollTop));

		var showHeaderPanel = currentScrollTop < previousScrollTop || currentScrollTop <= minScrollTop;
		$page.toggleClass('header-show', showHeaderPanel);
		$page.toggleClass('header-hide', !showHeaderPanel);

		previousScrollTop = currentScrollTop;
	});
}
/*toggle header end*/

/**
 * !fixed header
 * */
function fixedHeader(){
	// external js:
	// 1) resizeByWidth (resize only width);

	var $fixedElement = $('.header');

	if ( $fixedElement.length ) {
		var $page = $('html');
		// var $parent = $fixedElement.parent();
		// var $window = $(window);
		// var layout = 1200;

		$page.addClass('header-fixed');

		// $window.on('load resizeByWidth scroll', function () {
		//
		// 	var minScrollTop = $parent.offset().top;
		// 	var currentScrollTop = $window.scrollTop();
		//
		// 	$page.toggleClass('header-fixed', (currentScrollTop > minScrollTop));
		// })
	}
}
/*fixed header end*/

/**
 * !behaviors card product elements
 * */
function behaviorLogoOnScroll() {
	// external js:
	// 1) TweetMax;
	// 2) resizeByWidth;
	// 3) device.js;

	var $scrollArea = $(window);
	var transformElement = '.logo-wrap';
	var $transformElement = $(transformElement);
	// var transformElementSize = $transformElement.outerHeight();
	var viewport = 1200;

	$scrollArea.on('debouncedresize', function () {
		if ($transformElement.length) {

			var scrollTop = $scrollArea.scrollTop(),
				limitSize = $('.header__top').outerHeight(),
				currentSize = $('.header').height() - scrollTop,
				actualHeight;

			actualHeight = (currentSize > limitSize) ? currentSize : limitSize;

			TweenMax.to(transformElement, 0, {
				height: actualHeight
			});
		}
	});

	$scrollArea.on('load scroll', function () {
		if ($transformElement.length) {

			if (window.innerWidth >= viewport) {
				init();
			}
		}
	});

	function init() {
		changeSize();
	}

	// $(window).on('resize', function () {
	// 	if (window.innerWidth >= viewport) {
	//
	// 		if ($container) {
	//
	// 			$(opacityViewElement).css('pointer-events','auto');
	// 			TweenMax.set(opacityViewElement, {
	// 				scale: 1,
	// 				autoAlpha: 1
	// 			});
	//
	// 			TweenMax.set(slideViewElement, {
	// 				y: 'auto'
	// 			});
	// 		}
	//
	// 	}
	//});

	function changeSize() {

		var scrollTop = $scrollArea.scrollTop(),
			limitSize = $('.header__top').outerHeight(),
			heightHeight = $('header').height(),
			currentSize = heightHeight - scrollTop,
			actualSize;

		actualSize = (currentSize > limitSize) ? currentSize : limitSize;

		if (DESKTOP) {
			TweenMax.to(transformElement, 0, {
				height: actualSize
			});
		} else {
			if(scrollTop > 0) {
				$transformElement.css('height', limitSize)
			} else {
				$transformElement.css('height', heightHeight)
			}
		}
	}
}
/*behaviors card product elements end*/

/**
 * !scroll to section
 * */
function scrollToSection() {
	$(window).on("load",function(){

		/* Page Scroll to id fn call */
		$(".sidebar-menu-js a").mPageScroll2id({
			highlightClass: 'active-section',
			highlightSelector: '.sidebar-menu-js a',
			scrollSpeed: 700,
			offset: 80,
			forceSingleHighlight: true,
			keepHighlightUntilNext: false
		});
	});
}
/*scroll to section end*/

/**
 * !toggle hover class
 * */
(function ($) {
	var HoverClass = function (settings) {
		var options = $.extend({
			container: 'ul',
			item: 'li',
			drop: 'ul'
		},settings || {});

		var self = this;
		self.options = options;

		var container = $(options.container);
		self.$container = container;
		self.$item = $(options.item, container);
		self.$drop = $(options.drop, container);

		self.modifiers = {
			hover: 'hover',
			hoverNext: 'hover_next',
			hoverPrev: 'hover_prev'
		};

		self.addClassHover();

		if (!DESKTOP) {
			$(window).on('debouncedresize', function () {
				self.removeClassHover();
			});
		}
	};

	HoverClass.prototype.addClassHover = function () {
		var self = this,
			_hover = this.modifiers.hover,
			_hoverNext = this.modifiers.hoverNext,
			_hoverPrev = this.modifiers.hoverPrev,
			$item = self.$item,
			item = self.options.item,
			$container = self.$container;

		if (!DESKTOP) {

			$container.on('click', ''+item+'', function (e) {
				var $currentAnchor = $(this);
				var currentItem = $currentAnchor.closest($item);

				if (!currentItem.has(self.$drop).length){ return; }

				e.stopPropagation();

				if (currentItem.hasClass(_hover)){
					currentItem.removeClass(_hover).find('.'+_hover+'').removeClass(_hover);
					return;
				}

				$('.'+_hover+' ').not($currentAnchor.parents('.'+_hover+''))
					.removeClass(_hover)
					.find('.'+_hover+' ')
					.removeClass(_hover);
				currentItem.addClass(_hover);

				e.preventDefault();
			});

			$container.on('click', ''+self.options.drop+'', function (e) {
				e.stopPropagation();
			});

			$(document).on('click', function () {
				$item.removeClass(_hover);
			});

		} else {
			$container.on('mouseenter', ''+item+'', function () {

				var currentItem = $(this);

				if (currentItem.prop('hoverTimeout')) {
					currentItem.prop('hoverTimeout', clearTimeout(currentItem.prop('hoverTimeout')));
				}

				currentItem.prop('hoverIntent', setTimeout(function () {
					currentItem.addClass(_hover);
					currentItem.next().addClass(_hoverNext);
					currentItem.prev().addClass(_hoverPrev);
				}, 50));

			}).on('mouseleave', ''+ item+'', function () {

				var currentItem = $(this);

				if (currentItem.prop('hoverIntent')) {
					currentItem.prop('hoverIntent', clearTimeout(currentItem.prop('hoverIntent')));
				}

				currentItem.prop('hoverTimeout', setTimeout(function () {
					currentItem.removeClass(_hover);
					currentItem.next().removeClass(_hoverNext);
					currentItem.prev().removeClass(_hoverPrev);
				}, 50));

			});

		}
	};

	HoverClass.prototype.removeClassHover = function () {
		var self = this;
		self.$item.removeClass(self.modifiers.hover );
	};

	window.HoverClass = HoverClass;

}(jQuery));

function hoverClassInit(){
	if($('.nav').length){
		new HoverClass({
			container: ('.nav'),
			drop: '.nav-drop-js'
		});
	}
	if($('.header__contacts').length){
		new HoverClass({
			container: ('.header__contacts')
		});
	}
}
/*toggle hover class end*/

/**
 * !position drop menu
 * */
(function ($) {
	// external js:
	// 1) device.js 0.2.7 (widgets.js);
	// 2) resizeByWidth (resize only width);

	var PositionDropMenu = function (settings) {
		var options = $.extend({
			navContainer: null,
			navList: null,
			navMenuItem: 'li',
			navDropMenu: '.nav-drop-js'
		},settings || {});

		this.options = options;

		var container = $(options.navContainer);
		this.$navContainer = container;
		this.$navList = $(options.navList);
		this.$navMenuItem = $(options.navMenuItem, container);     // Пункты навигации.
		this.$navDropMenu = $(options.navDropMenu, container);     // Дроп-меню всех уровней.

		this.modifiers = {
			alignRight: 'align-right'
		};

		this.addAlignDropClass();
		this.removeAlignDropClass();
	};

	PositionDropMenu.prototype.createAlignDropClass = function (item, drop) {
		var self = this,
			alightRightClass = self.modifiers.alignRight,
			$navContainer = self.$navContainer;

		// var navContainerPosRight = $navContainer.offset().left + $navContainer.outerWidth();
		var navContainerPosRight = $('body').outerWidth();
		var navDropPosRight = drop.offset().left + drop.outerWidth();

		if(navContainerPosRight < navDropPosRight){
			item.addClass(alightRightClass);
		}
	};

	PositionDropMenu.prototype.addAlignDropClass = function () {
		var self = this,
			$navContainer = self.$navContainer,
			navMenuItem = self.options.navMenuItem,
			alightRightClass = self.modifiers.alignRight;

		$navContainer.on('click', ''+navMenuItem+'', function () {
			var $this = $(this);
			var $drop = $this.find(self.$navDropMenu);

			if ( !device.desktop() && $drop.length && !$this.hasClass(alightRightClass)) {
				self.createAlignDropClass($this, $drop);
			}
		});

		$navContainer.on('mouseenter', '' + navMenuItem + '', function () {
			var $this = $(this);
			var $drop = $this.find(self.$navDropMenu);

			if ( device.desktop() && $drop.length && !$this.hasClass(alightRightClass)) {
				self.createAlignDropClass($this, $drop);
			}
		});
	};

	PositionDropMenu.prototype.removeAlignDropClass = function () {
		var self = this;
		$(window).on('resizeByWidth', function () {
			self.$navMenuItem.removeClass(self.modifiers.alignRight );
		});
	};

	window.PositionDropMenu = PositionDropMenu;

}(jQuery));

function addAlignClass(){
	var $nav = $('.nav');

	if($nav.length){
		new PositionDropMenu({
			navContainer: '.nav',
			navList: '.nav__list',
			navMenuItem: 'li',
			navMenuAnchor: 'a',
			navDropMenu: '.nav-drop-js'
		});
	}
}
/*position drop menu end*/

/**
 * !nav expander
 * */
function navExpander() {
	// var nav = priorityNav.init({
	// 	navDropdownLabel: 'Eще...',
	// 	navDropdownBreakpointLabel: 'Меню',
	// 	throttleDelay: 200,
	// 	breakPoint: 768
	// });

	var $page = $('html');
	var $nav = $('.nav');
	var classResize = 'window-is-resize';
	var timeout;



	$(window).on('resizeByWidth', function () {
		$page.addClass(classResize);
	}).on('debouncedresize', function () {
		clearTimeout(timeout);

		timeout = setTimeout(function () {
			$page.removeClass(classResize);
		}, 300);
	});
}
/*nav expander end*/

/**
 * !multi accordion jquery plugin
 * */
(function ($) {
	var MultiAccordion = function (settings) {
		var options = $.extend({
			collapsibleAll: false,
			resizeCollapsible: false,
			accordionContainer: null,
			accordionItem: null,
			handler: null,
			collapsibleElement: null,
			openClass: 'active',
			animateSpeed: 300
		}, settings || {});

		this.options = options;
		var container = $(options.accordionContainer);
		this.$accordionContainer = container; //блок с аккордеоном
		this.$accordionItem = $(options.accordionItem, container); //непосредственный родитель сворачиваемого элемента
		this.$handler = $(options.handler, container); //элемент, по которому производим клик
		this.collapsibleElement = options.collapsibleElement; //элемент, который сворачивается/разворачивается
		this.$collapsibleElement = $(this.collapsibleElement); //элемент, который сворачивается/разворачивается
		this._collapsibleAll = options.collapsibleAll;
		this._animateSpeed = options.animateSpeed;
		this.$totalCollapsible = $(options.totalCollapsible);//элемент, по клику на который сворачиваются все аккордены в наборе
		this._resizeCollapsible = options.resizeCollapsible;//флаг, сворачивание всех открытых аккордеонов при ресайзе

		this.modifiers = {
			active: options.openClass,
			current: 'current'
		};

		this.bindEvents();
		this.totalCollapsible();
		this.totalCollapsibleOnResize();

	};

	MultiAccordion.prototype.totalCollapsible = function () {
		var self = this;
		self.$totalCollapsible.on('click', function () {
			self.$collapsibleElement.slideUp(self._animateSpeed, function () {
				self.$accordionContainer.trigger('accordionChange');
			});
			self.$accordionItem.removeClass(self.modifiers.active);
			self.$accordionItem.removeClass(self.modifiers.current);
		})
	};

	MultiAccordion.prototype.totalCollapsibleOnResize = function () {
		var self = this;
		$(window).on('resize', function () {
			if(self._resizeCollapsible){
				self.$collapsibleElement.slideUp(self._animateSpeed, function () {
					self.$accordionContainer.trigger('accordionChange');
				});
				self.$accordionItem.removeClass(self.modifiers.active);
			}
		});
	};

	MultiAccordion.prototype.bindEvents = function () {
		var self = this,
			modifiers = this.modifiers,
			animateSpeed = this._animateSpeed,
			$accordionContainer = this.$accordionContainer,
			$anyAccordionItem = this.$accordionItem,
			collapsibleElement = this.collapsibleElement,
			$collapsibleElement = this.$collapsibleElement;
		$accordionContainer.on('click', self.options.handler, function (e) {

			var current = $(this);
			var currentAccordionItem = current.closest($anyAccordionItem);

			if (!currentAccordionItem.has($collapsibleElement).length){
				return;
			}

			e.preventDefault();

			if (current.parent().prop('tagName') !== currentAccordionItem.prop('tagName')) {
				current = current.parent();
			}

			if (current.next(collapsibleElement).is(':visible')){
				currentAccordionItem.removeClass(modifiers.active).find($collapsibleElement).filter(':visible').slideUp(animateSpeed, function () {
					if($(this).attr('class') === current.next(collapsibleElement).attr('class')){
						// console.log('mAccordionAfterClose');
						self.$accordionContainer.trigger('mAccordionAfterClose').trigger('mAccordionAfterChange');
					}
				});
				// currentAccordionItem.removeClass(modifiers.current);
				currentAccordionItem
					.find($anyAccordionItem)
					.removeClass(modifiers.active);
				// .removeClass(modifiers.current);
				return;
			}


			if (self._collapsibleAll){
				var siblingContainers = $($accordionContainer).not(current.closest($accordionContainer));
				siblingContainers.find($collapsibleElement).slideUp(animateSpeed, function () {
					self.$accordionContainer.trigger('mAccordionAfterClosedAll').trigger('mAccordionAfterChange');
				});
				siblingContainers
					.find($anyAccordionItem)
					.removeClass(modifiers.active);
				// .removeClass(modifiers.current);
			}

			currentAccordionItem
				.siblings('.' + modifiers.active)
				.removeClass(modifiers.active)
				.find($collapsibleElement).filter(':visible').stop()
				.slideUp(animateSpeed, function () {
					// console.log('mAccordionAfterClosedSiblings');
					// self.$accordionContainer.trigger('mAccordionAfterClosedSiblings');
				});
			// currentAccordionItem.siblings().removeClass(modifiers.current);
			currentAccordionItem.siblings()
				.find($anyAccordionItem)
				.removeClass(modifiers.active);
			// .removeClass(modifiers.current);

			currentAccordionItem.addClass(modifiers.active);
			current.siblings($collapsibleElement).slideDown(animateSpeed, function () {
				// console.log('mAccordionAfterOpened');
				self.$accordionContainer.trigger('mAccordionAfterOpened').trigger('mAccordionAfterChange');
			});
		})
	};

	window.MultiAccordion = MultiAccordion;
}(jQuery));

/**
 * !multi accordion initial
 * */
function multiAccordionInit() {
	var regionMenu = '.region-menu-js';
	var regionMenuChangeTimeout;

	if($(regionMenu).length){
		new MultiAccordion({
			accordionContainer: regionMenu,
			accordionItem: 'li',
			handler: '.region-menu-handler-js',
			collapsibleElement: '.region-menu-drop-js',
			openClass: 'is-open',
			animateSpeed: 200
		});

		$(regionMenu).on('mAccordionAfterChange', function () {
			clearTimeout(regionMenuChangeTimeout);

			regionMenuChangeTimeout = setTimeout(function () {
				$(document.body).trigger("sticky_kit:recalc");
			}, 50);
		})
	}

	var navMobile = '.nav-mobile-js';

	if($(navMobile).length){
		new MultiAccordion({
			accordionContainer: navMobile,
			accordionItem: 'li',
			handler: '.nav-mobile-handler-js',
			collapsibleElement: '.nav-mobile-drop-js',
			openClass: 'is-open',
			animateSpeed: 200
		});
	}
}
/*multi accordion initial end*/


/**
 * !toggle drop language
 * */
function toggleLanguages() {

	$('.js-lang-open').on('click', function (e) {
		e.preventDefault();

		if ($('.search-form').length) {
			$(document).trigger('closeSearchForm');
		}

		$(this).closest('.lang').toggleClass('lang-opened');

		e.stopPropagation();
	});

	$(document).on('click closeDropLong', function () {
		closeDropLong();
	});

	$('.lang__list').on('click', function (e) {
		e.stopPropagation();
	});

	function closeDropLong() {
		$('.lang').removeClass('lang-opened');
	}
}
/*toggle drop language end*/

/**
 * !toggle drop years
 * */
function toggleYears() {

	var $choiceWrap = $('.js-choice-wrap');
	if ($choiceWrap.length) {

		$.each($choiceWrap, function () {
			var $thisChoiceWrap = $(this);

			if ($thisChoiceWrap.attr('data-parent-position') !== undefined) {
				$thisChoiceWrap.parent().css({
					'position': 'relative',
					'padding-right': Math.round($thisChoiceWrap.outerWidth() + 10)
				});
			}
		});

		$('.js-choice-open').on('click', function (e) {
			e.preventDefault();

			$(this).closest('.js-choice-wrap').toggleClass('choice-opened');

			e.stopPropagation();
		});

		$(document).on('click closeDropYears', function () {
			closeDropYears();
		});

		function closeDropYears() {
			$('.js-choice-wrap').removeClass('choice-opened');
		}

		$('.js-choice-drop').on('click', 'a', function () {

			$('a', '.js-choice-drop').removeClass('active');

			$(this)
				.addClass('active')
				.closest('.js-choice-wrap')
				.find('.js-choice-open span')
				.text($(this).find('span').text());
		});
	}

}
/*toggle drop years end*/

/**
 * !tab switcher
 * */
function tabSwitcher() {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (widgets.js);
	// 2) resizeByWidth (resize only width);

	/*
	 <!--html-->
	 <div class="some-class js-tabs" data-collapsed="true">
	 <!--if has data-collapsed="true" one click open tab content, two click close collapse tab content-->
	 <div class="some-class__nav">
	 <div class="some-class__tab">
	 <a href="#" class="js-tab-anchor" data-for="some-id-01">Text tab 01</a>
	 </div>
	 <div class="some-class__tab">
	 <a href="#" class="js-tab-anchor" data-for="some-id-02">Text tab 02</a>
	 </div>
	 </div>

	 <div class="some-class__panels js-tab-container">
	 <div class="some-class__panel js-tab-content" data-id="some-id-01">Text content 01</div>
	 <div class="some-class__panel js-tab-content" data-id="some-id-02">Text content 02</div>
	 </div>
	 </div>
	 <!--html end-->
	 */

	var $tabWrapper = $('.js-tabs');
	var $container = $('.js-tab-container');

	if ( !$container.length ) return false;

	if($tabWrapper.length){
		var $anchor = $('.js-tab-anchor'),
			$content = $('.js-tab-content'),
			activeClass = 'active-tab',
			animationSpeed = 0.2,
			animationHeightSpeed = 0.08;

		$.each($tabWrapper, function () {
			var $this = $(this),
				$thisAnchor = $this.find($anchor),
				$thisContainer = $this.find($container),
				$thisContent = $this.find($content);
			var initialTab = $this.find('.' + activeClass).attr('href').substring(1);
			var valDataAutoHeight = $this.data('auto-height');
			var thisAutoHeight = valDataAutoHeight !== false;
			var activeTab = false;

			// prepare traffic content
			function prepareTabsContent() {
				$thisContainer.css({
					'display': 'block',
					'position': 'relative',
					'overflow': 'hidden'
				});

				$thisContent.css({
					'display': 'block',
					'position': 'absolute',
					'left': 0,
					'right': 0,
					'width': '100%',
					'z-index': -1
				});

				switchContent();
			}

			prepareTabsContent();

			// toggle content
			$thisAnchor.on('click', function (e) {
				e.preventDefault();

				var $self = $(this),
					selfTab = $self.attr('href').substring(1);

				if ($this.data('collapsed') === true && activeTab === selfTab) {

					toggleActiveClass();
					toggleContent(false);
					changeHeightContainer(false);

					return;
				}

				if (activeTab === selfTab) return false;

				initialTab = selfTab;

				switchContent();
			});

			// switch content
			function switchContent() {
				if (initialTab) {
					toggleContent();
					changeHeightContainer();
					toggleActiveClass();
				}
			}

			// show active content and hide other
			function toggleContent() {

				thisAutoHeight && $thisContainer.css('height', $thisContainer.outerHeight());

				$thisContent.css({
					'position': 'absolute',
					'left': 0,
					'right': 0
				});

				TweenMax.to($thisContent, animationSpeed, {
					autoAlpha: 0
					// ,'z-index': -1
				});

				if ( arguments[0] === false ) return;

				var $initialContent = $thisContent.filter('[id="' + initialTab + '"]');

				$initialContent.css('z-index', 2);

				TweenMax.to($initialContent, animationSpeed, {
					autoAlpha: 1
					// ,'z-index': 2
				});
			}

			// change container's height
			function changeHeightContainer() {
				var $initialContent = $thisContent.filter('[id="' + initialTab + '"]');

				if ( arguments[0] === false ) {
					TweenMax.to($thisContainer, animationHeightSpeed, {
						'height': 0
					});

					return;
				}

				if (thisAutoHeight) {
					TweenMax.to($thisContainer, animationHeightSpeed, {
						'height': $initialContent.outerHeight(),
						onComplete: function () {

							thisAutoHeight && $thisContainer.css('height', 'auto');

							$initialContent.css({
								'position': 'relative',
								'left': 'auto',
								'right': 'auto'
							});
						}
					});
				}

				$initialContent.css({
					'position': 'relative',
					'left': 'auto',
					'right': 'auto'
				})
			}

			// toggle class active
			function toggleActiveClass(){
				$thisAnchor.removeClass(activeClass);
				$thisContent.removeClass(activeClass);

				if (initialTab !== activeTab) {

					$thisAnchor.filter('[href="#' + initialTab + '"]').addClass(activeClass);
					$thisContent.filter('[id="' + initialTab + '"]').addClass(activeClass);

					activeTab = initialTab;

					return false;
				}

				activeTab = false;
			}
		});
	}
}
/* tab switcher end */

/**
 * !sliders
 * */
function slidersInit() {
	var sliderArrowsOutside = {
		"prev": "<button type=\"button\" class=\"slick-prev slick-arrow-outside slick-prev-outside\">Previous</button>",
		'next': "<button type=\"button\" class=\"slick-next slick-arrow-outside slick-next-outside\">Next</button>"
	};

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

	/*gov slider*/
	var $govSlider = $('.gov__list');

	if($govSlider.length){

		$govSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.slick({
				fade: false,
				speed: dur  ,
				slidesToShow: 7,
				slidesToScroll: 7,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				infinite: false,
				dots: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1740,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 6
						}
					},
					{
						breakpoint: 1560,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5
						}
					},
					{
						breakpoint: 1380,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 820,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});

		});
	}

	/*promo slider*/
	var $promoSlider = $('.promo-slider');

	if($promoSlider.length){

		$promoSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.slick({
				fade: false,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				autoplay: true,
				autoplaySpeed: 8000,
				infinite: true,
				dots: true,
				arrows: false
			});

		});
	}

	/*infoblock slider*/
	var $infoblockSlider = $('.infoblock__list');

	if($infoblockSlider.length){

		$infoblockSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.slick({
				fade: false,
				speed: dur,
				slidesToShow: 4,
				slidesToScroll: 4,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				// autoplay: true,
				// autoplaySpeed: 8000,
				infinite: false,
				dots: true,
				arrows: true,
				appendArrows: $(this).closest('.section').find('.section__title'),
				prevArrow: sliderArrowsOutside.prev,
				nextArrow: sliderArrowsOutside.next,
				responsive: [
					{
						breakpoint: 1920,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					}, {
						breakpoint: 960,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]

			});

		});
	}

	/*news grid slider*/
	var $newsGridSlider = $('.news-grid-slider');

	if($newsGridSlider.length){

		$newsGridSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.slick({
				fade: false,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				// autoplay: true,
				// autoplaySpeed: 8000,
				infinite: true,
				dots: true,
				arrows: true
			});

		});
	}

	/*tape slider*/
	var $othersNews = $('.others-news-wrap');
	if($othersNews.length){
		$.each($othersNews, function () {
			var $currentSlider = $(this);
			var dur = 300;
			var $thumbsSlider = $currentSlider.find('.tape-slider-js');
			var $panelsSlider = $currentSlider.find('.others-news-slider-js');

			$thumbsSlider.slick({
				fade: false,
				speed: dur,
				slidesToShow: 1,
				// slidesToScroll: 1,
				infinite: false,
				dots: false,
				arrows: true,
				focusOnSelect: true,
				variableWidth: true,
				asNavFor: $panelsSlider
			});

			$panelsSlider.slick({
				fade: true,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				dots: false,
				arrows: false,
				asNavFor: $thumbsSlider
			});

		});
	}

	//banner slider
	// var $bannersSlider = $('.banners__list');
	//
	// if($bannersSlider.length){
	//
	// 	$bannersSlider.each(function () {
	// 		var $currentSlider = $(this);
	// 		var dur = 200;
	//
	// 		$currentSlider.slick({
	// 			fade: false,
	// 			speed: dur  ,
	// 			slidesToShow: 4,
	// 			slidesToScroll: 4,
	// 			// initialSlide: 2,
	// 			// lazyLoad: 'ondemand',
	// 			infinite: true,
	// 			dots: false,
	// 			arrows: true
	// 		});
	//
	// 	});
	// }
}
/*sliders end*/

/**
 * !equal height
 * */
function equalHeightInit() {
	var $files = $('.files');

	if ($files.length) {
		$files.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	// var $newsGridInner = $('.news-grid__item--wide .news-grid__inner');
	//
	// if ($newsGridInner.length) {
	// 	$newsGridInner.children().matchHeight({
	// 		byRow: true, property: 'height', target: null, remove: false
	// 	});
	// }
}
/*equal height end*/

/**
 * !masonry
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

	var $newsGrid = $('.news-grid--main .news-grid__list');
	if ($newsGrid.length) {
		$newsGrid.masonry({
			// options
			itemSelector: '.news-grid-js',
			columnWidth: '.news-grid__item',
			percentPosition: false
		});
	}
}
/*masonry*/

/**
 * !extra popup jQuery plugin
 * */
(function ($) {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (libs);
	// 2) device.js (libs);
	// 3) resizeByWidth (resize only width);

	// add css style
	// .nav-opened-before{
	// 	width: 100%!important;
	// 	height: 100%!important;
	// 	max-width: 100%!important;
	// 	max-height: 100%!important;
	// 	margin: 0!important;
	// 	padding: 0!important;
	// 	overflow: hidden!important;
	// }

	// .nav-opened-before .wrapper{ z-index: 99; } // z-index of header must be greater than footer
	//
	// if nav need to hide
	// @media only screen and (min-width: [example: 1280px]){
	// .nav{
	// 		-webkit-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		-ms-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 	}
	// .nav-list > li{
	// 		-webkit-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		-ms-transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		transform: translate(0, 0) matrix(1, 0, 0, 1, 0, 0) !important;
	// 		opacity: 1 !important;
	// 		visibility: visible !important;
	// 	}
	// }
	var ExtraPopup = function (settings) {
		var options = $.extend({
			mainContainer: 'html', // container wrapping all elements
			navContainer: null, // main navigation container
			navMenu: null, // menu
			btnMenu: null, // element which opens or switches menu
			btnMenuClose: null, // element which closes a menu
			navMenuItem: null,
			navMenuAnchor: 'a',
			staggerItems: null,
			overlay: '.nav-overlay', // overlay's class
			overlayAppendTo: 'body', // where to place overlay
			overlayAlpha: 0.8,
			overlayIndex: 997,
			classReturn: null,
			overlayBoolean: true,
			animationType: 'ltr', // rtl or ltr
			animationSpeed: 300,
			animationSpeedOverlay: null,
			minWidthItem: 100,
			mediaWidth: null,
			closeOnResize: true,
			closeEsc: true // close popup on click Esc
		}, settings || {});

		var container = $(options.navContainer),
			_animateSpeed = options.animationSpeed;

		var self = this;
		self.options = options;
		self.$mainContainer = $(options.mainContainer);            // . по умолчанию <html></html>
		self.$navMenu = $(options.navMenu);
		self.$btnMenu = $(options.btnMenu);
		self.$btnMenuClose = $(options.btnMenuClose);
		self.$navContainer = container;
		self.$navMenuItem = $(options.navMenuItem, container);     // Пункты навигации;
		self.$navMenuAnchor = $(options.navMenuAnchor, container); // Элемент, по которому производится событие (клик);
		self.$staggerItems = options.staggerItems || self.$navMenuItem;  //Элементы в стеке, к которым применяется анимация. По умолчанию navMenuItem;

		self._animationType = options.animationType;
		self._animateSpeed = _animateSpeed;

		// overlay
		self.overlayBoolean = options.overlayBoolean;
		self.overlayAppendTo = options.overlayAppendTo;
		self.$overlay = $('<div class="' + options.overlay.substring(1) + '"></div>'); // Темплейт оверлея;
		self._overlayAlpha = options.overlayAlpha;
		self._overlayIndex = options.overlayIndex;
		self._animateSpeedOverlay = options.animationSpeedOverlay || _animateSpeed;
		self._minWidthItem = options.minWidthItem;
		self._mediaWidth = options.mediaWidth;
		self.closeOnResize = options.closeOnResize;
		self.closeEsc = options.closeEsc;

		self.desktop = device.desktop();

		self.modifiers = {
			active: 'active',
			opened: 'extra-popup-opened',
			beforeOpen: 'before-extra-popup-open'
		};

		self.outsideClick();
		if ( self._mediaWidth === null || window.innerWidth < self._mediaWidth ) {
			self.preparationAnimation();
		}
		self.toggleMenu();
		self.eventsBtnMenuClose();
		self.clearStyles();
		self.closeNavOnEsc();
	};

	ExtraPopup.prototype.navIsOpened = false;

	// overlay append to "overlayAppendTo"
	ExtraPopup.prototype.createOverlay = function () {
		var self = this,
			$overlay = self.$overlay;

		$overlay.appendTo(self.overlayAppendTo);

		TweenMax.set($overlay, {
			autoAlpha: 0,
			position: 'fixed',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			background: '#000',
			'z-index': self._overlayIndex,
			onComplete: function () {
				TweenMax.to($overlay, self._animateSpeedOverlay / 1000, {autoAlpha: self._overlayAlpha});
			}
		});
	};

	// toggle overlay
	ExtraPopup.prototype.toggleOverlay = function (close) {
		var self = this,
			$overlay = self.$overlay;

		if (close === false) {
			TweenMax.to($overlay, self._animateSpeedOverlay / 1000, {
				autoAlpha: 0,
				onComplete: function () {
					$overlay.remove();
				}
			});
			return false;
		}

		self.createOverlay();
	};

	// toggle menu
	ExtraPopup.prototype.toggleMenu = function () {
		var self = this,
			$buttonMenu = self.$btnMenu;

		// $buttonMenu.on('mousedown touchstart vmousedown', function (e) {
		$buttonMenu.on('click', function (e) {
			e.preventDefault();

			if (self.navIsOpened) {
				self.closeNav();
			} else {
				self.openNav();
			}

			e.stopPropagation();
		});
	};

	// events btn close menu
	ExtraPopup.prototype.eventsBtnMenuClose = function () {

		var self = this;

		self.$btnMenuClose.on('click', function (e) {
			e.preventDefault();

			if ( self.navIsOpened ) {
				self.closeNav();
			}

			e.stopPropagation();
		});
	};

	// click outside menu
	ExtraPopup.prototype.outsideClick = function () {
		var self = this;

		$(document).on('click', function () {
			if ( self.navIsOpened ) {
				self.closeNav();
			}
		});

		self.$navContainer.on('click', function (e) {
			if ( self.navIsOpened ) {
				e.stopPropagation();
			}
		})
	};

	// close popup on click to "Esc" key
	ExtraPopup.prototype.closeNavOnEsc = function () {
		var self = this;

		$(document).keyup(function(e) {
			if (self.navIsOpened && self.closeEsc && e.keyCode === 27) {
				self.closeNav();
			}
		});
	};

	// open nav
	ExtraPopup.prototype.openNav = function() {
		// console.log("openNav");

		var self = this,
			$html = self.$mainContainer,
			$navContainer = self.$navContainer,
			$buttonMenu = self.$btnMenu,
			$buttonClose = self.$btnMenuClose,
			_animationSpeed = self._animateSpeedOverlay,
			$staggerItems = self.$staggerItems;

		var modifiers = self.modifiers;
		var classBeforeOpen = modifiers.beforeOpen;
		var classAfterOpen = modifiers.opened;

		$html.addClass(classBeforeOpen);
		$buttonMenu.addClass(modifiers.active);
		$buttonClose.addClass(classBeforeOpen);

		$navContainer.css({
			'-webkit-transition-duration': '0s',
			'transition-duration': '0s'
		});

		TweenMax.to($navContainer, _animationSpeed / 1000, {
			xPercent: 0,
			autoAlpha: 1,
			ease: Cubic.easeOut,
			onComplete: function () {
				$html.addClass(classAfterOpen);
				$buttonClose.addClass(classAfterOpen);

				noScroll();
			}
		});

		// TweenMax.staggerTo($staggerItems, 0.85, {
		// 	autoAlpha:1,
		// 	scale:1,
		// 	y: 0,
		// 	ease:Cubic.easeOut
		// }, 0.1);


		if (self.overlayBoolean) {
			self.toggleOverlay();
		}

		self.navIsOpened = true;
	};

	// close nav
	ExtraPopup.prototype.closeNav = function() {
		// console.log("closeNav");

		var self = this,
			$html = self.$mainContainer,
			$navContainer = self.$navContainer,
			$buttonMenu = self.$btnMenu,
			$buttonClose = self.$btnMenuClose,
			_animationSpeed = self._animateSpeedOverlay,
			_mediaWidth = self._mediaWidth,
			_animationType = self._animationType;

		var modifiers = self.modifiers;
		var classAfterOpen = modifiers.opened;
		var classBeforeOpen = modifiers.beforeOpen;

		$html.removeClass(classAfterOpen);
		$html.removeClass(classBeforeOpen);
		$buttonMenu.removeClass(modifiers.active);
		$buttonClose.removeClass(classAfterOpen);
		$buttonClose.removeClass(classBeforeOpen);

		if (self.overlayBoolean) {
			self.toggleOverlay(false);
		}

		var duration = _animationSpeed / 1000;

		if (_animationType === 'ltr') {
			TweenMax.to($navContainer, duration, {
				xPercent: -100,
				ease: Cubic.easeOut,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					TweenMax.set($navContainer, {
						autoAlpha: 0
					});

					canScroll();
				}
			});
		} else if (_animationType === 'rtl') {
			TweenMax.to($navContainer, duration, {
				xPercent: 100,
				ease: Cubic.easeOut,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					TweenMax.set($navContainer, {
						autoAlpha: 0
					});

					canScroll();
				}
			});

		} else {
			console.error('Type animation "' + _animationType + '" is wrong!')
		}

		self.navIsOpened = false;
	};

	// preparation element before animation
	ExtraPopup.prototype.preparationAnimation = function() {
		var self = this;

		var $navContainer = self.$navContainer,
			$staggerItems = self.$staggerItems,
			_animationType = self._animationType;

		// console.log('preparationAnimation: ', $navContainer);

		if (_animationType === 'ltr') {
			TweenMax.set($navContainer, {
				xPercent: -100,
				autoAlpha: 0,
				onComplete: function () {
					$navContainer.show(0);
				}
			});
			// TweenMax.set($staggerItems, {
			// 	autoAlpha: 0,
			// 	scale: 0.6,
			// 	y: 50
			// });
		} else if (_animationType === 'rtl') {
			TweenMax.set($navContainer, {
				xPercent: 100,
				autoAlpha: 0,
				onComplete: function () {
					$navContainer.show(0);
				}
			});
			// TweenMax.set($staggerItems, {
			// 	autoAlpha: 0,
			// 	scale: 0.6,
			// 	y: 50
			// });

		} else {
			console.error('Type animation "' + _animationType + '" is wrong!')
		}
	};

	// clearing inline styles
	ExtraPopup.prototype.clearStyles = function() {
		var self = this,
			$btnMenu = self.$btnMenu,
			$navContainer = self.$navContainer,
			$staggerItems = self.$staggerItems;

		//clear on horizontal resize
		if (self.closeOnResize === true) {

			$(window).on('resizeByWidth', function () {
				if (self.navIsOpened) {
					if (!$btnMenu.is(':visible')) {
						$navContainer.attr('style', '');
						$staggerItems.attr('style', '');
					} else {
						self.closeNav();
					}
				}
			});

		}
	};

	window.ExtraPopup = ExtraPopup;

}(jQuery));

/**
 * !extra popup initial
 * */
function popupsInit(){

	/*site map popup*/
	var siteMapPopupClass = '.site-map-js';

	if($(siteMapPopupClass).length){

		new ExtraPopup({
			navContainer: siteMapPopupClass,
			navMenu: '.site-map__list',
			btnMenu: '.btn-site-map-js',
			btnMenuClose: '.btn-popup-close-js',
			navMenuItem: '.site-map__box',
			overlayAppendTo: 'body',
			closeOnResize: true,
			// mediaWidth: 1280,
			animationSpeed: 300,
			overlayAlpha: 0.35
		});

	}

	/*navigation popup*/
	var navPopupClass = '.popup-nav-small-js';

	if($(navPopupClass).length){

		new ExtraPopup({
			navContainer: navPopupClass,
			navMenu: '.nav__list',
			btnMenu: '.btn-nav-open-js',
			btnMenuClose: '.btn-nav-small-close-js',
			navMenuItem: '.nav__list li',
			overlayAppendTo: 'body',
			closeOnResize: true,
			// mediaWidth: 1280,
			animationSpeed: 300,
			overlayAlpha: 0.35
		});

	}

	/*banners popup*/
	var popupBannersClass = '.popup-banners-js';

	if($(popupBannersClass).length){

		new ExtraPopup({
			navContainer: popupBannersClass,
			// navMenu: '.site-map__list',
			btnMenu: '.btn-banners-open-js',
			btnMenuClose: '.btn-banners-close-js',
			// navMenuItem: '.site-map__box',
			overlayAppendTo: 'body',
			closeOnResize: true,
			// mediaWidth: 1600,
			animationType: 'rtl',
			animationSpeed: 300,
			overlayAlpha: 0.35
		});

	}

	/*news popup*/
	var popupNewsClass = '.popup-news-js';

	if($(popupNewsClass).length){

		new ExtraPopup({
			navContainer: popupNewsClass,
			// navMenu: '.site-map__list',
			btnMenu: '.btn-news-open-js',
			btnMenuClose: '.btn-news-close-js',
			// navMenuItem: '.site-map__box',
			overlayAppendTo: 'body',
			closeOnResize: true,
			// mediaWidth: 1200,
			animationSpeed: 300,
			overlayAlpha: 0.35
		});

	}
}
/*extra popup initial end*/

/**
 * file input
 * */
function fileInput() {
	$('.upload-file').each(function () {
		$(this).filer({
			// limit: 3,
			changeInput: '' +
			'<div class="jFiler-input-dragDrop">' +
				'<div class="jFiler-input-inner">' +
					'<div class="jFiler-input-icon">' +
						'<i class="icon-jfi-cloud-up-o"></i>' +
					'</div>' +
					'<div class="jFiler-input-text">' +
						'<strong>Кликните по полю или перетащите сюда файл</strong>' +
					'</div>' +
				'</div>' +
			'</div>',
			showThumbs: true,
			theme: "dragdropbox",
			captions: {
				button: "Выберите файлы",
				feedback: "Выберите файлы для загрузки",
				feedback2: "Файлы выбраны",
				drop: "Перетащите файлы в это поле для загрузки",
				removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
				errors: {
					filesLimit: "Максиальное количество файлов: {{fi-limit}}",
					filesType: "Загружать можно только изображения!",
					filesSize: "{{fi-name}} слишком велик! Пожалуйста, загрузите файл до {{fi-maxSize}} MB.",
					filesSizeAll: "Файлы, которые Вы выбрали слишком велики! Пожалуйста, загружайте файлы до {{fi-maxSize}} MB."
				}
			},
			templates: {
				box: '<ul class="jFiler-items-list jFiler-items-default list-reset"></ul>'
			},
			// captions: {
			// 	button: "Choose Files",
			// 	feedback: "Choose files To Upload",
			// 	feedback2: "files were chosen",
			// 	drop: "Drop file here to Upload",
			// 	removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
			// 	errors: {
			// 		filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
			// 		filesType: "Only Images are allowed to be uploaded.",
			// 		filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
			// 		filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
			// 	}
			// },
			addMore: true,
			allowDuplicates: false,
			clipBoardPaste: true,
			dragDrop: {
				dragEnter: null,
				dragLeave: null,
				drop: null,
				dragContainer: null
			}
		});
	});
}
/*file input end end*/

/*breadcrumbs add hover class*/
function breadcrumbsBehavior(){
	var $breadcrumbsItemHasDrop = $('.breadcrumbs__item_has-drop');
	if (!DESKTOP) {

		for(var i = 0; i < $breadcrumbsItemHasDrop.length;i++){
			var $this = $breadcrumbsItemHasDrop.eq(i);
			$this.attr('data-text', $this.children('a').children('span').text());
		}

		$breadcrumbsItemHasDrop
			.not(':last-child')
			.children('a')
			.children('span')
			.text('...');

		$breadcrumbsItemHasDrop.on('click', function (e) {
			var $breadcrumbsItemCurrent = $(this);
			if ($breadcrumbsItemCurrent.hasClass('hover')){
				return;
			}
			e.stopPropagation();

			$breadcrumbsItemHasDrop
				.removeClass('hover breadcrumbs__item_long')
				.addClass('breadcrumbs__item_short');

			$breadcrumbsItemHasDrop.children('a').children('span').text('...');

			$breadcrumbsItemCurrent
				.addClass('hover breadcrumbs__item_long')
				.removeClass('breadcrumbs__item_short');

			$breadcrumbsItemCurrent.children('a').children('span').text($breadcrumbsItemCurrent.data('text'));

			e.preventDefault();
		});

		$('.breadcrumbs-drop').on('click', function (e) {
			e.stopPropagation();
		});

		$(document).on('click', function () {
			$('.breadcrumbs__item_has-drop').removeClass('hover');
		});

	} else {
		$breadcrumbsItemHasDrop.on('mouseenter', function () {
			$breadcrumbsItemHasDrop
				.removeClass('hover breadcrumbs__item_long')
				.addClass('breadcrumbs__item_short');

			$(this)
				.addClass('hover breadcrumbs__item_long')
				.removeClass('breadcrumbs__item_short');

		}).on('mouseleave', function () {
			$(this).removeClass('hover');
		});
	}
}
/*breadcrumbs add hover class end*/

/**
 * !sticky layout
 * */
function stickyLayout(){

	if (!DESKTOP) {
		return;
	}

	var offsetTopBase = $('.header__top').outerHeight();

	/*sidebar sticky*/
	// var $sidebar = $(".sidebar-holder");
	//
	// if ($sidebar.length) {
	// 	$sidebar.css('position','static');
	//
	// 	var resizeTimerMenu;
	//
	// 	$(window).on('load resizeByWidth', function () {
	// 		if(window.innerWidth < 980){
	// 			// $sidebar.trigger("sticky_kit:detach").attr('style','');
	// 			$sidebar.trigger("sticky_kit:detach").css('position','relative');
	// 			return;
	// 		}
	//
	// 		clearTimeout(resizeTimerMenu);
	// 		resizeTimerMenu = setTimeout(function () {
	// 			$sidebar.stick_in_parent({
	// 				parent: '.main-holder',
	// 				offset_top: 100
	// 			});
	// 		}, 100);
	// 	})
	// }

	/*sidebar region sticky*/
	// var $sidebarRegion = $(".sidebar-region").find('.sidebar__holder');
	//
	// if ($sidebarRegion.length) {
	//
	// 	var timeoutSidebarRegionSticky;
	//
	// 	$(window).on('load resizeByWidth', function () {
	//
	// 		clearTimeout(timeoutSidebarRegionSticky);
	// 		timeoutSidebarRegionSticky = setTimeout(function () {
	// 			$sidebarRegion.stick_in_parent({
	// 				parent: '.main-holder',
	// 				offset_top: offsetTopBase
	// 			});
	// 		}, 100);
	//
	// 	});
	//
	// 	$(window).trigger('resize');
	// }

	/*sidebar top sticky*/
	var $sidebarTop = $(".sidebar-top");

	if ($sidebarTop.length) {

		var timeoutSidebarSticky;

		$(window).on('load resizeByWidth', function () {

			clearTimeout(timeoutSidebarSticky);
			timeoutSidebarSticky = setTimeout(function () {
				$sidebarTop.stick_in_parent({
					parent: '.main-holder',
					offset_top: offsetTopBase
				});
			}, 200);

		});

		$(window).trigger('resize');
	}

	/*sidebar bottom heading sticky*/
	var $headingBottomHeading = $(".sidebar-bottom__heading");

	if ($headingBottomHeading.length) {

		var timeoutHeadingSticky;

		$(window).on('load resizeByWidth', function () {
			var offsetTop = $sidebarTop.outerHeight() + offsetTopBase;

			clearTimeout(timeoutHeadingSticky);
			timeoutHeadingSticky = setTimeout(function () {
				$headingBottomHeading.stick_in_parent({
					// recalc_every: 1,
					parent: '.main-holder',
					offset_top: offsetTop
				});
			}, 200);

		});

		$(window).trigger('resize');
	}

	/*sidebar content sticky*/
	var $sidebarBottomContent = $(".sidebar-bottom__content");

	if ($sidebarBottomContent.length) {

		var timeoutContentSticky;

		$(window).on('load resizeByWidth', function () {
			offsetTop = $sidebarTop.outerHeight() + $headingBottomHeading.outerHeight() + offsetTopBase;

			clearTimeout(timeoutContentSticky);
			timeoutContentSticky = setTimeout(function () {
				$sidebarBottomContent.stick_in_parent({
					// recalc_every: 1,
					parent: '.main-holder',
					offset_top: offsetTop
				});
			}, 200);

		});

		$(window).trigger('resize');
	}

	/*side menu sticky*/
	var $sideMenu = $(".side");

	if ($sideMenu.length) {

		var timeoutSideMenuSticky;

		$(window).on('load resizeByWidth', function () {

			// var offsetTop = offsetTopBase * 2;
			var offsetTop = offsetTopBase;

			clearTimeout(timeoutSideMenuSticky);
			timeoutSideMenuSticky = setTimeout(function () {
				$sideMenu.stick_in_parent({
					parent: '.main-inside',
					offset_top: offsetTop
				}).on("sticky_kit:bottom", function(e) {
					$(e.target).addClass('is_bottom')
				}).on("sticky_kit:unbottom", function(e) {
					$(e.target).removeClass('is_bottom')
				});
			}, 200);

		});

		$(window).trigger('resize');
	}

	/*aside sticky*/
	var $aside = $(".aside__holder");

	if ($aside.length) {

		var timeoutAsideSticky;

		$(window).on('load resizeByWidth', function () {

			var offsetTop = offsetTopBase * 2;

			// if(window.innerWidth < 1600){
			// 	// $sidebar.trigger("sticky_kit:detach").attr('style','');
			// 	$aside.trigger("sticky_kit:detach").css('position','relative');
			// 	return;
			// }

			clearTimeout(timeoutAsideSticky);
			timeoutAsideSticky = setTimeout(function () {
				$aside.stick_in_parent({
					parent: '.main-inside',
					offset_top: offsetTop
				});
			}, 200);

		});

		$(window).trigger('resize');
	}
}
/*sticky layout end*/

/**
 * !region menu
 * */
function regionMenu() {
	var timeoutSlide;
	$('.region-expand-tab-js').on('click', function () {
		var $this = $(this);
		var $thisContainer = $(this).closest('.region-expand-container-js');
		var activeClass = 'is-expanded';

		if($thisContainer.hasClass(activeClass)) {
			$thisContainer.removeClass(activeClass);
		} else {
			$thisContainer.addClass(activeClass);
		}

		$thisContainer.find('.region-expand-panel-js').stop().slideToggle(250, function () {
			clearTimeout(timeoutSlide);

			timeoutSlide = setTimeout(function () {
				$(document.body).trigger("sticky_kit:recalc");
			}, 50);
		})
	});
}
/*region menu end*/

/**
 * !custom scroll
 * */
function customScrollInit() {
	var customScrollOptions = {
		theme:"minimal-dark",
		scrollInertia: 100,
		autoDraggerLength: true
	};

	var $regionMenuContainer = $('.region-menu-panel');
	if($regionMenuContainer.length) {
		$regionMenuContainer.mCustomScrollbar(customScrollOptions);
	}

	var $navMobileContainer = $('.popup-nav-small__holder');
	if($navMobileContainer.length) {
		$navMobileContainer.mCustomScrollbar(customScrollOptions);
	}

	var $popupNewsContainer = $('.popup-news__holder');
	if($popupNewsContainer.length) {
		$popupNewsContainer.mCustomScrollbar(customScrollOptions);
	}

	var $popupBannersContainer = $('.popup-banners__holder');
	if($popupBannersContainer.length) {
		$popupBannersContainer.mCustomScrollbar(customScrollOptions);
	}
}
/*custom scroll end*/

/**
 * !datepicker initial
 * */
function datePickerInit() {
	var $newsDateOutput = $('.news-date-output-js').find('span');
	var datepickerOverlay = $('<div/>', {
		'class': "datepicker-overlay"
	});

	$('.news-date').flatpickr({
		"locale": "ru",
		defaultDate: 'today',
		altInput: true,
		clickopens: false,
		wrap: true,
		altFormat: 'd M. Y',
		maxDate: 'today',
		disableMobile: false,
		onValueUpdate: function() {
			$newsDateOutput.text($(this.altInput).val());
		},
		onOpen: function() {
			if (DESKTOP) {
				$(this.calendarContainer).before(datepickerOverlay.clone());
				setTimeout(function () {
					$('html').addClass('datepicker-overlay-is-visible');
				}, 10);
			}
		},
		onClose: function() {
			if (DESKTOP) {
				$('html').removeClass('datepicker-overlay-is-visible');
				setTimeout(function () {
					$('.datepicker-overlay').remove();
				}, 200);
			}
		},
		onChange: function () {
			$newsDateOutput.text($(this.altInput).val());
		}
	});
}
/*datepicker initial end*/

function blockedScrollOnPage() {
	$(window).on('load debouncedresize', function () {
		if (Modernizr.objectfit) { // shame: detect ie 11 and older
			if (window.innerWidth > 992) {
				$('.sidebar').on('mouseenter', function () {
					noScroll();
				}).on('mouseleave', function () {
					canScroll();
				});
			}
		}
	})
}


/**
 * !footer at bottom
 * */
function footerBottom() {
	var $footer = $('.footer__holder');

	if ($footer.length) {
		$('.sidebar').after($('<div class="spacer"></div>')); // need for sidebar's element sticky of bottom page

		setTimeout(function () {
			layoutFooter();
		}, 50);

		$(window).on('resizeByWidth', function () {
			layoutFooter();
		});

		function layoutFooter() {
			// var footerHeight = $('.footer__holder', $footer).outerHeight();
			var footerHeight = $($footer).outerHeight();
			// $footer.css({
			// 	'margin-top': -footerHeight
			// });

			$('.spacer').css({
				'height': footerHeight,
				'pointer-events': 'none','float': 'left',
				'width': '100%'
			});
		}
	}
}
/*footer at bottom end*/

/**
 * !form success for example
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

$(window).on('load', function(){
	$('html').addClass('page-loaded');
	customScrollInit();
});

$(document).ready(function(){
	placeholderInit();
	inputHasValueClass();
	inputFilledClass();
	printShow();
	toggleHeader();
	fixedHeader();
	// behaviorLogoOnScroll();
	hoverClassInit();
	addAlignClass();
	// navExpander();
	scrollToSection();
	multiAccordionInit();
	toggleLanguages();
	toggleYears();
	tabSwitcher();
	slidersInit();
	equalHeightInit();
	masonryInit();
	popupsInit();
	fileInput();
	breadcrumbsBehavior();
	stickyLayout();
	regionMenu();
	datePickerInit();
	blockedScrollOnPage();
	footerBottom();
	formSuccessExample();
});