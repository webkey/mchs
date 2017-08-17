/**
 * !js scroll page lock
 * */

var docElem = window.document.documentElement,
	didScroll,
	scrollPosition;

function noScrollFn() {
	window.scrollTo(scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0);
}

function noScroll() {
	window.removeEventListener('scroll', scrollHandler);
	window.addEventListener('scroll', noScrollFn);
}

function scrollFn() {
	window.addEventListener('scroll', scrollHandler);
}

function canScroll() {
	window.removeEventListener('scroll', noScrollFn);
	scrollFn();
}

function scrollHandler() {
	if (!didScroll) {
		didScroll = true;
		setTimeout(function () {
			scrollPage();
		}, 60);
	}
}

function scrollPage() {
	scrollPosition = {
		x: window.pageXOffset || docElem.scrollLeft,
		y: window.pageYOffset || docElem.scrollTop
	};
	didScroll = false;
}

scrollFn();
/*js scroll page lock end*/

/**
 * !cookie
 * */
function setCookie(name, value, options) {
	// https://learn.javascript.ru/cookie
	options = options || {};

	var expires = options.expires;

	if (typeof expires === "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;

	for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

function getCookie(name) {
	// https://learn.javascript.ru/cookie
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*cookie end*/

/**
 * !switch special version
 * */
function switchSpecialVersion() {
	$('.cecutient-version-toggle-js').on('click', function (e) {
		e.preventDefault();
		$('body').hide(); // hide content

		toggleSpecialVersion();

		location.reload();
	});
}
/*switch special version end*/

/**
 * !check cecutient version cookie
 */
function checkCecutientVersionCookie() {
	if (getCookie('cecutientVersion') === 'true' && !$('#cecutient-css-link').length) {
		toggleSpecialVersion();
	}
}
/*check cecutient version cookie end*/

/**
 * !toggle special version
 * */
function toggleSpecialVersion() {

	var $cecutientCssLink = $('#cecutient-css-link');
	var $body = $('body');
	var path = cssPath || 'css/';

	// console.log("path: ", path);

	if ($cecutientCssLink.length) {

		$cecutientCssLink.remove();

		setCookie('cecutientVersion', false, {
			// expires: expiresValue,
			// domain: "localhost:3000",
			path: "/"
		});

		$body.removeClass('cecutient-version');
		$body.removeClass('color-scheme-bw');
		$body.removeClass('images-bw');

		$(document).trigger('specialVersionOff');

	} else {
		setCookie('cecutientVersion', true, {
			// expires: expiresValue,
			// domain: "localhost:3000",
			path: "/"
		});

		$('<link/>', {
			id: 'cecutient-css-link',
			rel: 'stylesheet',
			href: path + 'cecutient.css'
		}).appendTo('head');

		$body.addClass('cecutient-version');
		$body.addClass('color-scheme-bw');
		$body.addClass('images-bw');

		$(document).trigger('specialVersionOn');
	}
}
/*toggle special version end*/

/**
 * !resize only width
 * */
var resizeByWidth = true;

var prevWidth = -1;
$(window).resize(function () {
	var currentWidth = $('body').outerWidth();
	resizeByWidth = prevWidth !== currentWidth;
	if (resizeByWidth) {
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
function placeholderInit() {
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/**
 * !toggle class for input on focus
 * */
function inputToggleFocusClass() {
	var $fieldWrap = $('.input-wrap');

	if ($fieldWrap.length) {
		var $inputsAll = $fieldWrap.find("input, textarea, select");
		var _classFocus = 'input--focus';

		$inputsAll.focus(function () {
			var $thisField = $(this);

			$thisField
				.closest($fieldWrap)
				.addClass(_classFocus);

		}).blur(function () {
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
		var $inputsAll = $fieldWrap.find('input[type="email"], input[type="search"], :text, textarea, select');
		var _classHasValue = 'has--value';

		function switchHasValue() {
			var $currentField = $(this);
			var $currentFieldWrap = $currentField.closest($fieldWrap);

			$currentFieldWrap.removeClass(_classHasValue);

			//first element of the select must have a value empty ("")
			if ($currentField.val() !== '') {
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
		var $inputsAll = $fieldWrap.find('input[type="email"], input[type="search"], :text, textarea, select');
		var _classFilled = 'input--filled';

		$inputsAll.focus(function () {
			var $thisField = $(this);

			$thisField
				.closest($fieldWrap)
				.addClass(_classFilled);

		}).blur(function () {
			var $thisField = $(this);

			if ($thisField.val() === '') {
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
			if ($currentField.val() !== '') {
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
 * !Multiselect init
 * */
function customSelect(select) {
	$.each(select, function () {
		var $thisSelect = $(this);
		var placeholder = $thisSelect.attr('data-placeholder') || '';
		// console.log("placeholder: ", placeholder);
		$thisSelect.select2({
			language: "ru",
			width: '100%',
			containerCssClass: 'cselect-head',
			dropdownCssClass: 'cselect-drop',
			placeholder: placeholder
		});
	})
}
/* Multiselect init end */

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
function toggleHeader() {
	// external js:
	// 1) debouncedresize (lib.min.js);
	// 2) TweenMax (lib.min.js);

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
function fixedHeader() {
	// external js:
	// 1) resizeByWidth (resize only width);

	var $fixedElement = $('.header');

	if ($fixedElement.length) {
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
			if (scrollTop > 0) {
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
	// external js:
	// 1) Page Scroll to id (lib.min.js);
	// 2) debouncedresize (lib.min.js);
	// 3) TweenMax (lib.min.js);
	var activeSectionClass = 'active-section';

	$(window).on("load", function () {

		setTimeout(function () {
			/* Page Scroll to id fn call */
			$(".sidebar-menu-js a").mPageScroll2id({
				highlightClass: activeSectionClass,
				highlightSelector: '.sidebar-menu-js a',
				scrollSpeed: 500,
				offset: 80,
				forceSingleHighlight: true,
				keepHighlightUntilNext: true
				// highlightByNextTarget: true
			});
		}, 1000);
	});

	/* collapse navigation menu */
	var $header = $('.header');
	var $headerTop = $('.header__top');
	var previousScrollTop = $(window).scrollTop();
	var $wrap = $('.sidebar-menu-wrap-js');
	var activeClass = 'short-view';
	var classIcon = 'nav-menu-opener';
	var timeout;

	var $tplOpener = $('<div class="' + classIcon + '"><i>&nbsp;</i></div>');
	$tplOpener.clone().appendTo($wrap);

	$wrap.on('click', '.' + classIcon, function () {
		var $currentWrap = $(this).parent();
		var $currentItem = getActiveItem();

		if ($currentWrap.hasClass(activeClass)) {
			$currentWrap.removeClass(activeClass).css('height', 'auto');
			TweenMax.set($currentWrap.find('.sidebar-menu-js'), {
				y: 0
			});
			return;
		}

		$currentWrap.addClass(activeClass).css('height', $currentItem.outerHeight());
		TweenMax.set($currentWrap.find('.sidebar-menu-js'), {
			y: -$currentItem.position().top
		});
	});

	$(window).on('load scroll debouncedresize', function () {

		var currentScrollTop = $(window).scrollTop();
		var minScrollTop = $header.outerHeight() - $headerTop.outerHeight();

		if ($wrap.length) {
			var $currentItem = getActiveItem();

			// console.log("$item.length > 1: ", $item.length > 0);
			// console.log("$wrap.top: ", $currentItem.position().top);

			if (currentScrollTop >= minScrollTop) {
				clearTimeout(timeout);
				$wrap.addClass(activeClass).css('height', $currentItem.outerHeight());
				timeout = setTimeout(function () {
					TweenMax.set($wrap.find('.sidebar-menu-js'), {
						y: -$currentItem.position().top
					});
				}, 100);
			} else {
				$wrap.removeClass(activeClass).css('height', 'auto');
			}
		}

		previousScrollTop = currentScrollTop;
	});

	function getActiveItem() {
		var $item = $wrap.find('.' + activeSectionClass).parent();

		return ($item.length > 0) ? $item : $wrap.find('li').first();
	}
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
		}, settings || {});

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

			$container.on('click', '' + item + '', function (e) {
				var $currentAnchor = $(this);
				var currentItem = $currentAnchor.closest($item);

				if (!currentItem.has(self.$drop).length) {
					return;
				}

				e.stopPropagation();

				if (currentItem.hasClass(_hover)) {
					currentItem.removeClass(_hover).find('.' + _hover + '').removeClass(_hover);
					return;
				}

				$('.' + _hover + ' ').not($currentAnchor.parents('.' + _hover + ''))
					.removeClass(_hover)
					.find('.' + _hover + ' ')
					.removeClass(_hover);
				currentItem.addClass(_hover);

				e.preventDefault();
			});

			$container.on('click', '' + self.options.drop + '', function (e) {
				e.stopPropagation();
			});

			$(document).on('click', function () {
				$item.removeClass(_hover);
			});

		} else {
			$container.on('mouseenter', '' + item + '', function () {

				var currentItem = $(this);

				if (currentItem.prop('hoverTimeout')) {
					currentItem.prop('hoverTimeout', clearTimeout(currentItem.prop('hoverTimeout')));
				}

				currentItem.prop('hoverIntent', setTimeout(function () {
					currentItem.addClass(_hover);
					currentItem.next().addClass(_hoverNext);
					currentItem.prev().addClass(_hoverPrev);
				}, 50));

			}).on('mouseleave', '' + item + '', function () {

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
		self.$item.removeClass(self.modifiers.hover);
	};

	window.HoverClass = HoverClass;

}(jQuery));

function hoverClassInit() {
	if ($('.nav').length) {
		new HoverClass({
			container: ('.nav'),
			drop: '.nav-drop-js'
		});
	}
	if ($('.header__contacts').length) {
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
		}, settings || {});

		this.options = options;

		var container = $(options.navContainer);
		this.$navContainer = container;
		this.$navList = $(options.navList);
		this.$navMenuItem = $(options.navMenuItem, container);     // Пункты навигации.
		this.$navDropMenu = $(options.navDropMenu, container);     // Дроп-меню всех уровней.

		this.modifiers = {
			alignRight: 'align-right',
			alignBottom: 'align-bottom'
		};

		this.addAlignDropClass();
		this.removeAlignDropClass();
	};

	PositionDropMenu.prototype.createAlignDropClass = function (item, drop) {
		var self = this,
			$navContainer = self.$navContainer,
			alightRightClass = self.modifiers.alignRight,
			alightBottomClass = self.modifiers.alignBottom;

		// for align right
		// var navContainerPosRight = $navContainer.offset().left + $navContainer.outerWidth();
		var navContainerPosRight = $('body').outerWidth();
		var navDropPosRight = drop.offset().left + drop.outerWidth();

		if (navContainerPosRight < navDropPosRight) {
			item.addClass(alightRightClass);
		}

		// clear js style
		drop.attr('style', '');

		// for align bottom
		// var maxPosBottom = $(window).height() - $navContainer.outerHeight();
		var maxPosBottom = $(window).height();
		var dropHeight = drop.outerHeight();
		var currentDropPosBottom = drop.offset().top - $(window).scrollTop() + dropHeight;

		// console.log("==================: ", drop.children('ul').children('li').first().children('.nav__tab').find('a').text());

		// console.log("drop.offset().top: ", drop.offset().top);
		// console.log("$(window).scrollTop(): ", $(window).scrollTop());
		// console.log("dropHeight: ", dropHeight);

		// console.log("$navContainerHeight: ", $navContainer.outerHeight());
		// console.log("drop: ", drop);
		// console.log("maxPosBottom: ", maxPosBottom);
		// console.log("dropHeight: ", dropHeight);
		// console.log("currentDropPosBottom: ", currentDropPosBottom);
		// console.log("bottomSpace: ", maxPosBottom - currentDropPosBottom);

		if (maxPosBottom < currentDropPosBottom) {
			if (maxPosBottom < 500) {
				return;
			}
			item.addClass(alightBottomClass);
			drop.css('margin-top', maxPosBottom - currentDropPosBottom);
		}
	};

	PositionDropMenu.prototype.addAlignDropClass = function () {
		var self = this,
			$navContainer = self.$navContainer,
			navMenuItem = self.options.navMenuItem;

		$navContainer.on('click', '' + navMenuItem + '', function () {
			var $this = $(this);
			var $drop = $this.find(self.$navDropMenu).eq(0);

			if (!device.desktop() && $drop.length) {
				self.createAlignDropClass($this, $drop);
			}
		});

		$navContainer.on('mouseenter', '' + navMenuItem + '', function () {
			var $this = $(this);
			var $drop = $this.find(self.$navDropMenu).eq(0);

			if (device.desktop() && $drop.length) {
				self.createAlignDropClass($this, $drop);
			}
		});
	};

	PositionDropMenu.prototype.removeAlignDropClass = function () {
		var self = this,
			alightRightClass = self.modifiers.alignRight,
			alightBottomClass = self.modifiers.alignBottom;

		$(window).on('debouncedresize', function () {
			self.$navMenuItem.removeClass(alightRightClass);
			self.$navMenuItem.removeClass(alightBottomClass);
		});
	};

	window.PositionDropMenu = PositionDropMenu;

}(jQuery));

function addAlignClass() {
	var $nav = $('.nav');

	if ($nav.length) {
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
	var nav = priorityNav.init({
		navDropdownLabel: 'Eще...',
		navDropdownBreakpointLabel: 'Меню',
		throttleDelay: 200,
		breakPoint: 768
	});

	var $page = $('html');
	// var $nav = $('.nav');
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
			collapsibleAll: false, // если установить значение true, сворачиваются идентичные панели НА СТРАНИЦЕ, кроме текущего
			resizeCollapsible: false, // если установить значение true, при ресайзе будут соворачиваться все элементы
			container: null, // общий контейнер
			item: null, // непосредственный родитель открывающегося элемента
			handler: null, // открывающий элемента
			handlerWrap: null, // если открывающий элемент не является непосредственным соседом открывающегося элемента, нужно указать элемент, короный является оберткой открывающего элемета и лежит непосредственно перед открывающимся элементом (условно, является табом)
			panel: null, // открывающийся элемент
			openClass: 'active', // класс, который добавляется при открытии
			currentClass: 'current', // класс текущего элемента
			animateSpeed: 300, // скорость анимации
			collapsible: false // сворачивать соседние панели
		}, settings || {});

		this.options = options;
		var container = $(options.container);
		this.$container = container;
		this.$item = $(options.item, container);
		this.$handler = $(options.handler, container);
		this.$handlerWrap = $(options.handlerWrap, container);
		this._animateSpeed = options.animateSpeed;
		this.$totalCollapsible = $(options.totalCollapsible);
		this._resizeCollapsible = options.resizeCollapsible;

		this.modifiers = {
			active: options.openClass,
			current: options.currentClass
		};

		this.bindEvents();
		this.totalCollapsible();
		this.totalCollapsibleOnResize();

	};

	MultiAccordion.prototype.totalCollapsible = function () {
		var self = this;
		self.$totalCollapsible.on('click', function () {
			self.$panel.slideUp(self._animateSpeed, function () {
				self.$container.trigger('accordionChange');
			});
			self.$item.removeClass(self.modifiers.active);
		})
	};

	MultiAccordion.prototype.totalCollapsibleOnResize = function () {
		var self = this;
		$(window).on('resize', function () {
			if (self._resizeCollapsible) {
				self.$panel.slideUp(self._animateSpeed, function () {
					self.$container.trigger('accordionChange');
				});
				self.$item.removeClass(self.modifiers.active);
			}
		});
	};

	MultiAccordion.prototype.bindEvents = function () {
		var self = this;
		var $container = this.$container;
		var $item = this.$item;
		var panel = this.options.panel;

		$container.on('click', self.options.handler, function (e) {
			var $currentHandler = self.options.handlerWrap ? $(this).closest(self.options.handlerWrap) : $(this);
			// console.log("!!self.options.handlerWrap: ", self.options.handlerWrap);
			// console.log("$currentHandler: ", $currentHandler);
			var $currentItem = $currentHandler.closest($item);

			if ($currentItem.has($(panel)).length) {
				e.preventDefault();

				if ($currentHandler.next(panel).is(':visible')) {
					self.closePanel($currentItem);

					return;
				}

				if (self.options.collapsibleAll) {
					self.closePanel($($container).not($currentHandler.closest($container)).find($item));
				}

				if (self.options.collapsible) {
					self.closePanel($currentItem.siblings());
				}

				self.openPanel($currentItem, $currentHandler);
			}
		})
	};

	MultiAccordion.prototype.closePanel = function ($currentItem) {
		var self = this;
		var panel = self.options.panel;
		var openClass = self.modifiers.active;

		$currentItem.removeClass(openClass).find(panel).filter(':visible').slideUp(self._animateSpeed, function () {
			// console.log('mAccordionAfterClose');
			self.$container.trigger('mAccordionAfterClose').trigger('mAccordionAfterChange');
		});

		$currentItem
			.find(self.$item)
			.removeClass(openClass);
	};

	MultiAccordion.prototype.openPanel = function ($currentItem, $currentHandler) {
		var self = this;
		var panel = self.options.panel;

		$currentItem.addClass(self.modifiers.active);

		$currentHandler.next(panel).slideDown(self._animateSpeed, function () {
			// console.log('mAccordionAfterOpened');
			self.$container.trigger('mAccordionAfterOpened').trigger('mAccordionAfterChange');
		});
	};

	window.MultiAccordion = MultiAccordion;
}(jQuery));

/**
 * !multi accordion initial
 * */
function multiAccordionInit() {
	var regionMenu = '.region-menu-js';
	var regionMenuChangeTimeout;

	if ($(regionMenu).length) {
		new MultiAccordion({
			container: regionMenu,
			item: 'li',
			handler: '.region-menu-handler-js',
			handlerWrap: '.region-menu__tab',
			panel: '.region-menu-drop-js',
			openClass: 'is-open',
			animateSpeed: 200,
			collapsible: true
		});

		$(regionMenu).on('mAccordionAfterChange', function () {
			clearTimeout(regionMenuChangeTimeout);

			regionMenuChangeTimeout = setTimeout(function () {
				$(document.body).trigger("sticky_kit:recalc");
			}, 50);
		})
	}

	var navMobile = '.nav-mobile-js';

	if ($(navMobile).length) {
		new MultiAccordion({
			container: navMobile,
			item: 'li',
			handler: '.nav-mobile-handler-js',
			handlerWrap: '.nav-mobile__tab',
			panel: '.nav-mobile-drop-js',
			openClass: 'is-open',
			animateSpeed: 200,
			collapsible: true
		});
	}

	/*faq*/
	var faq = '.expander-js';
	var $faq = $(faq);

	if ($faq.length) {
		new MultiAccordion({
			container: faq,
			item: '.expander-item-js',
			handler: '.expander-angle-js',
			panel: '.expander-panel-js',
			handlerWrap: '.expander-header-js',
			openClass: 'expander-is-open',
			animateSpeed: 300
		});
	}

	var faqTimeout;
	$faq.on('mAccordionAfterChange', function () {
		clearTimeout(faqTimeout);

		faqTimeout = setTimeout(function () {
			$(document.body).trigger("sticky_kit:recalc");
		}, 50);
	})
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
 * !toggle drop
 * */
function toggleDrop() {

	var $choiceContainer = $('.js-choice-wrap');
	var openClass = 'choice-opened';

	if ($choiceContainer.length) {

		$.each($choiceContainer, function () {
			var $thisContainer = $(this);

			if ($thisContainer.attr('data-parent-position') !== undefined) {
				$thisContainer.parent().css({
					'position': 'relative',
					'padding-right': Math.round($thisContainer.outerWidth() + 10),
					'overflow': 'visible'
				});
			}
		});

		$('.js-choice-open').on('click', function (e) {
			e.preventDefault();
			var $currentContainer = $(this).closest('.js-choice-wrap');

			e.stopPropagation();

			if ($currentContainer.hasClass(openClass)) {
				$currentContainer.removeClass(openClass);
				return;
			}

			$choiceContainer.removeClass(openClass);
			$currentContainer.addClass(openClass);
		});

		$(document).on('click', function () {
			closeDrop();
		});

		$choiceContainer.on('closeDrop', function () {
			closeDrop();
		});

		function closeDrop() {
			$choiceContainer.removeClass(openClass);
		}

		$('.js-choice-drop').on('click', 'a', function (e) {
			var $this = $(this);

			// if data-window-location is true, prevent default
			if ($this.closest($choiceContainer).attr('data-window-location') === 'true') {
				e.preventDefault();
			}

			// if data-select is false, do not replace text
			if ($this.closest($choiceContainer).attr('data-select') === 'false') {
				return false;
			}

			$('a', '.js-choice-drop').removeClass('active');

			$this
				.addClass('active')
				.closest('.js-choice-wrap')
				.find('.js-choice-open span')
				.text($this.find('span').text());
		});
	}

}
/*toggle drop end*/

/**
 * select save
 * */
function selectSave() {
	$('.js-save-select').on('click', 'a', function (e) {
		var $this = $(this);
		e.preventDefault();

		var yearsValue = $this.find('span').text();

		var $container = $this.closest('.section');
		$container.find('.save-total-js').text(saveObject[yearsValue]['total']);
		$container.find('.save-children-js').text(saveObject[yearsValue]['children']);
	});
}
/*select save end*/

/**
 * !tab switcher
 * */
function tabSwitcher() {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (widgets.js);
	// 2) resizeByWidth (resize only width);

	/*
	 <!--html-->
	 <div class="some-class tabs-js" data-collapsed="true" data-auto-height="true" data-to-queue="480">
	 <!--if has data-collapsed="true" one click open tab content, two click close collapse tab content-->
	 <div class="some-class__nav">
	 <div class="some-class__tab">
	 <a href="#" class="tab-anchor-js" data-for="some-id-01">Text tab 01</a>
	 </div>
	 <div class="some-class__tab">
	 <a href="#" class="tab-anchor-js" data-for="some-id-02">Text tab 02</a>
	 </div>
	 </div>

	 <div class="some-class__panels tab-container-js">
	 <div class="some-class__panel tab-content-js" data-id="some-id-01">Text content 01</div>
	 <div class="some-class__panel tab-content-js" data-id="some-id-02">Text content 02</div>
	 </div>
	 </div>
	 <!--html end-->
	 */

	var $tabWrapper = $('.js-tabs');
	var $container = $('.js-tab-container');

	if (!$container.length) return false;

	if ($tabWrapper.length) {
		var $anchor = $('.js-tab-anchor'),
			$content = $('.js-tab-content'),
			activeClass = 'active-tab',
			collapseAllClass = 'collapsed-all-tab',
			animationSpeed = 0.2,
			animationHeightSpeed = 0.08;

		$.each($tabWrapper, function () {
			var $this = $(this),
				$thisAnchor = $this.find($anchor),
				$thisContainer = $this.find($container),
				$thisContent = $this.find($content);
			if ($this.find('.' + activeClass).length > 0) {
				var initialTab = $this.find('.' + activeClass).attr('href').substring(1);
			}
			// var toQueue = $this.data('to-queue'); // transform tab for toQueue value layout width
			// var tabInitedFlag = false;
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
					// 'display': 'block',
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

			// collapse current tab method
			$thisAnchor.eq(0).on('tabSwitcherCollapse', function () {
				var $self = $(this);
				var selfTab = $self.attr('href').substring(1);

				if (activeTab === selfTab) {
					toggleActiveClass();
					toggleContent(false);
					changeHeightContainer(false);
				}
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

				if (arguments[0] === false) return;

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

				if (arguments[0] === false) {
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
			function toggleActiveClass() {
				$thisAnchor.removeClass(activeClass);
				$thisContent.removeClass(activeClass);
				$this.removeClass(collapseAllClass);

				if (initialTab !== activeTab) {

					$thisAnchor.filter('[href="#' + initialTab + '"]').addClass(activeClass);
					$thisContent.filter('[id="' + initialTab + '"]').addClass(activeClass);
					if($this.data('collapsed') === true){
						$this.addClass(collapseAllClass);
					}

					activeTab = initialTab;

					return false;
				}

				activeTab = false;
			}

			// to queue
			// $(window).on('load debouncedresize', function () {
			// 	console.log("toQueue.length: ", !!toQueue);
			// 	if (toQueue && window.innerWidth < toQueue){
			// 		tabInitedFlag = false;
			// 		$thisContainer.attr('style', "");
			// 		$thisContent.attr('style', "");
			//
			// 		return;
			// 	}
			//
			// 	console.log("tabInitedFlag: ", tabInitedFlag);
			// 	if(!tabInitedFlag) {
			// 		prepareTabsContent();
			// 		tabInitedFlag = true;
			// 	}
			// });
		});
	}

	$('.popup-label__text').on('click', function () {
		$('a[href*="#expanded-search"]').trigger('tabSwitcherCollapse');
	})
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

	if ($imagesSlider.length) {
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
				// fade: true,
				speed: dur,
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
			}).on('afterChange reInit', function (event, slick, currentSlide, nextSlide) {
				// $('.slide-curr', $(slick.$slider)).text(currentSlide + 1);
				//
				// $slideTitle.hide();
				// $slideTitle.eq(currentSlide).fadeIn();
			});

		});
	}

	/*gov slider*/
	var $govSlider = $('.gov__list');

	if ($govSlider.length) {

		$govSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.on('init', function (event, el) {
				$(el.$slides).matchHeight({
					byRow: true, property: 'height', target: null, remove: false
				});
			}).slick({
				fade: false,
				speed: dur,
				slidesToShow: 7,
				slidesToScroll: 7,
				autoplay: true,
				autoplaySpeed: 5000,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				infinite: true,
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
	var dur = 200;

	if ($promoSlider.length && getCookie('cecutientVersion') !== 'true') {
		$.each($promoSlider, function () {
			var $currentSlider = $(this);

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

		// var timeoutPromoSlider;
		// $(document).on('specialVersionOff', function () {
		// 	clearTimeout(timeoutPromoSlider);
		// 	timeoutPromoSlider = setTimeout(function () {
		// 		$.each($promoSlider, function () {
		// 			var $currentSlider = $(this);
		//
		// 			$currentSlider.resize();
		// 		})
		// 	}, 100);
		// });
	}

	/*infoblock slider*/
	var $infoblockSlider = $('.infoblock__list');

	if ($infoblockSlider.length) {

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
						breakpoint: 1600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}, {
						breakpoint: 640,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]

			});

		});
	}

	/*news grid slider*/
	var $newsGridSlider = $('.news-grid-slider');

	if ($newsGridSlider.length && getCookie('cecutientVersion') !== 'true') {

		$.each($newsGridSlider, function () {
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

		// var timeoutNewsGridSlider;
		// $(document).on('specialVersionOff', function () {
		// 	clearTimeout(timeoutNewsGridSlider);
		// 	timeoutNewsGridSlider = setTimeout(function () {
		// 		$.each($newsGridSlider, function () {
		// 			var $currentSlider = $(this);
		//
		// 			$currentSlider.resize();
		// 		})
		// 	}, 100);
		// });
	}

	/*tape slider*/
	var $othersNews = $('.others-news-wrap');
	// if($othersNews.length){
	// 	$.each($othersNews, function () {
	// 		var $currentSlider = $(this);
	// 		var dur = 300;
	// 		var $thumbsSlider = $currentSlider.find('.tape-slider-js');
	// 		var $panelsSlider = $currentSlider.find('.others-news-slider-js');
	//
	// 		$thumbsSlider.slick({
	// 			fade: false,
	// 			speed: dur,
	// 			slidesToShow: 1,
	// 			// slidesToScroll: 1,
	// 			infinite: true,
	// 			dots: false,
	// 			arrows: true,
	// 			focusOnSelect: true,
	// 			variableWidth: true,
	// 			asNavFor: $panelsSlider
	// 		});
	//
	// 		$panelsSlider.slick({
	// 			accessibility: false,
	// 			swipe: false,
	// 			touchMove: false,
	// 			fade: false,
	// 			speed: dur,
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			infinite: true,
	// 			dots: false,
	// 			arrows: false,
	// 			asNavFor: $thumbsSlider
	// 		});
	//
	// 	});
	// }

	if ($othersNews.length) {
		$othersNews.each(function () {
			var $thisGroup = $(this);
			// var $wrap = $thisSlider.parent();
			var $thumbsSlider = $thisGroup.find('.tape-slider-js');
			var $panelsSlider = $thisGroup.find('.others-news-slider-js');
			var thumbsSlidesLength = $thisGroup.find('.swiper-slide').length;
			var $thisBtnNext = $('.swiper-button-next', $thisGroup);
			var $thisBtnPrev = $('.swiper-button-prev', $thisGroup);
			var currentClass = 'current';
			var dur = 300;
			var infinite = false;

			var thumbsSliderInit = new Swiper($thumbsSlider, {
				loop: infinite,
				loopedSlides: thumbsSlidesLength,
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
				keyboardControl: false,
				// slideToClickedSlide: true,

				nextButton: $thisBtnNext,
				prevButton: $thisBtnPrev
			});

			function addCurrentClass(index) {
				$(thumbsSliderInit.slides).removeClass(currentClass);
				$(thumbsSliderInit.slides[index]).addClass(currentClass);
			}

			var panelsSliderInit = $panelsSlider.on('init', function (event, target) {
				addCurrentClass(target.currentSlide);

				var $currentBtnMore = $(target.$slides[target.currentSlide]).find('.section__footer').find('a');

				var $targetBtnMore = $(target.$slider).closest('.section').find('.all-news-project-js');
				$targetBtnMore.text($currentBtnMore.text());
				$targetBtnMore.attr('href', $currentBtnMore.attr('href'));
			}).slick({
				accessibility: false,
				swipe: false,
				touchMove: false,
				fade: true,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: infinite,
				dots: false,
				arrows: false
			}).on('beforeChange', function (event, target, currentSlide, nextSlide) {
				addCurrentClass(nextSlide);

				var $currentBtnMore = $(target.$slides[nextSlide]).find('.section__footer').find('a');

				var $targetBtnMore = $(target.$slider).closest('.section').find('.all-news-project-js');
				$targetBtnMore.text($currentBtnMore.text());
				$targetBtnMore.attr('href', $currentBtnMore.attr('href'));
			});

			thumbsSliderInit.on('tap', function (swiper, event) {
				if (infinite) {
					// if infinite is true
					panelsSliderInit.slick('slickGoTo', $(swiper.clickedSlide).data('swiper-slide-index'));
				} else {
					// if infinite is false
					panelsSliderInit.slick('slickGoTo', swiper.clickedIndex);
				}
			});

			setTimeout(function () {
				thumbsSliderInit.update();
			}, 1000);
		});
	}

	var $tapeGalleryContainer = $('.tape-gallery');
	if ($tapeGalleryContainer.length) {
		$tapeGalleryContainer.each(function () {
			var $thisContainer = $(this);
			var $thisSlider = $('.swiper-container', $thisContainer);
			var $thisBtnNext = $('.swiper-button-next', $thisSlider);
			var $thisBtnPrev = $('.swiper-button-prev', $thisSlider);

			new Swiper($thisSlider, {
				loop: false,
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
				keyboardControl: false,

				nextButton: $thisBtnNext,
				prevButton: $thisBtnPrev
			});
		});
	}

	/*soc media slider*/
	var $socMediaSlider = $('.soc-media-slider__list');

	if ($socMediaSlider.length) {

		$socMediaSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 500;
			var autoplaySpeed = $socMediaSlider.data('autoplay-speed');

			$currentSlider.slick({
				fade: true,
				speed: dur,
				slidesToShow: 1,
				slidesToScroll: 1,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				autoplay: true,
				autoplaySpeed: autoplaySpeed,
				infinite: true,
				dots: false,
				arrows: false,
				accessibility: false,
				swipe: false,
				touchMove: false
			});

		});
	}
}
/*sliders end*/

/**
 * light gallery initial
 * */
function lightGalleryInit() {
	var $lightGallery = $('.lg-js');
	var $lightGalleryVideo = $('.lg-video-js');

	if ($lightGallery.length) {
		$.each($lightGallery, function () {
			var $thisGallery = $(this);
			lightGalleryImages($thisGallery);
		})
	}

	if ($lightGalleryVideo.length) {
		$.each($lightGalleryVideo, function () {
			var $thisGallery = $(this);
			lightGalleryVideos($thisGallery);
		})
	}

	function lightGalleryImages($thisGallery) {
		$thisGallery.lightGallery({
			thumbnail: true,
			animateThumb: true,
			showThumbByDefault: false,
			download: false,
			counter: true,
			share: false,
			hash: false
		});
	}

	function lightGalleryVideos($thisGallery) {
		$thisGallery.lightGallery({
			thumbnail: true,
			animateThumb: true,
			showThumbByDefault: false,
			download: false,
			counter: true,
			share: false,
			hash: false,
			autoplayControls: false,
			zoom: false
		});
	}

	var $imagesSlider = $('.images-slider');
	if ($imagesSlider.length) {
		$imagesSlider.lightGallery({
			thumbnail: false,
			animateThumb: false,
			showThumbByDefault: false,
			download: false,
			counter: false,
			share: false,
			hash: false,
			selector: '.images-slider__item'
		});
	}

	var $contentImg = $('.img-zoom');
	if ($contentImg.length) {
		$contentImg.lightGallery({
			thumbnail: false,
			animateThumb: false,
			showThumbByDefault: false,
			download: false,
			counter: false,
			share: false,
			hash: false,
			selector: 'this',
			addClass: 'zoom-img-popup',
			backdropDuration: 0.5
		});
	}
}
/*light gallery initial end*/

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

	var $mediaList = $('.media-list');

	if ($mediaList.length) {
		$mediaList.children().matchHeight({
			byRow: true, property: 'height', target: null, remove: false
		});
	}

	var $leads = $('.lead__list');

	if ($leads.length) {
		var leadsMatchHeightOptions = {
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		};
		var $leadItem = $leads.children();

		$leadItem.matchHeight(leadsMatchHeightOptions);


		function setHeight(el) {
			el.css('height', 'auto');
			var height = Math.max.apply(Math, el.map(function () {
				return $(this).outerHeight();
			}).get());
			el.css('height', height);
			$.fn.matchHeight._apply($leadItem, leadsMatchHeightOptions)
		}

		setHeight($('.lead__position'));
		setHeight($('.lead__name'));

		$(window).on('debouncedresize', function () {
			setHeight($('.lead__position'));
			setHeight($('.lead__name'));
		})
	}

	var $newsFloat = $('.news-float__list');

	if ($newsFloat.length) {
		var newsFloatMatchHeightOptions = {
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		};
		var $newsFloatItem = $newsFloat.children();

		$newsFloatItem.matchHeight(newsFloatMatchHeightOptions);


		// function newsFloatSetHeight(el) {
		// 	el.css('height', 'auto');
		// 	var height = Math.max.apply(Math, el.map(function () {
		// 		return $(this).outerHeight();
		// 	}).get());
		// 	el.css('height', height);
		// 	$.fn.matchHeight._apply($newsFloatItem, newsFloatMatchHeightOptions)
		// }
		//
		// newsFloatSetHeight($('.news-float__content'));
		// newsFloatSetHeight($('.lead__name'));
		//
		// $(window).on('debouncedresize', function () {
		// 	newsFloatSetHeight($('.news-float__content'));
		// 	newsFloatSetHeight($('.lead__name'));
		// })
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
	if ($newsPreviews.length && getCookie('cecutientVersion') !== 'true') {
		$newsPreviews.masonry({
			// options
			itemSelector: '.news-previews__item',
			percentPosition: true
		});
	}
}
/*masonry*/

/**
 * !datepicker initial
 * */
function datePickerInit() {
	var datepickerOverlay = $('<div/>', {
		'class': "datepicker-overlay"
	});

	var $dataTarget = $('.news-date-output-js');
	if ($dataTarget.length) {
		$.each($dataTarget, function () {
			var $this = $(this);
			$this.attr('data-default', $this.find('span').text());
		});
	}

	var $newsDate = $('.news-date');
	if ($newsDate) {
		var _defaultDate = $('#main-news-date').val() || 'today';

		var calendar = $newsDate.flatpickr({
			"locale": "ru",
			// mode: "range",
			defaultDate: _defaultDate,
			altInput: true,
			clickopens: false,
			wrap: true,
			altFormat: 'd M Y',
			maxDate: 'today',
			disableMobile: false,
			onValueUpdate: function () {
				$(this.element).find('.news-date-output-js').find('span').text($(this.altInput).val());
			},
			onOpen: function () {
				if (DESKTOP) {
					$(this.calendarContainer).before(datepickerOverlay.clone());
					setTimeout(function () {
						$('html').addClass('datepicker-overlay-is-visible');
					}, 10);
				}
			},
			onClose: function () {
				if (DESKTOP) {
					$('html').removeClass('datepicker-overlay-is-visible');
					setTimeout(function () {
						$('.datepicker-overlay').remove();
					}, 200);
				}
			},
			onChange: function () {
				$(this.element).find('.news-date-output-js').find('span').text($(this.altInput).val());
			}
		});
	}

	var $resultDate = $('.result-date-js');
	if ($resultDate) {
		var calendarResult = $resultDate.flatpickr({
			"locale": "ru",
			// mode: "range",
			altInput: true,
			clickopens: false,
			wrap: true,
			altFormat: 'd M Y',
			maxDate: 'today',
			disableMobile: false,
			onValueUpdate: function () {
				$(this.element).find('.news-date-output-js').find('span').text($(this.altInput).val());
			},
			onOpen: function () {
				if (DESKTOP) {
					$(this.calendarContainer).before(datepickerOverlay.clone());
					setTimeout(function () {
						$('html').addClass('datepicker-overlay-is-visible');
					}, 10);
				}
			},
			onClose: function () {
				if (DESKTOP) {
					$('html').removeClass('datepicker-overlay-is-visible');
					setTimeout(function () {
						$('.datepicker-overlay').remove();
					}, 200);
				}
			},
			onChange: function () {
				var $thisDateInput = $(this.element);
				var $dataOutput = $thisDateInput.find('.news-date-output-js');
				$dataOutput.find('span').text($(this.altInput).val() || $dataOutput.data('default'));
				$thisDateInput.closest('form').find('input[type=submit]').prop('disabled', false);

				$thisDateInput.trigger('changeFlatpickr');
			}
		});

		$resultDate.on('clearFlatpickr', function () {
			calendarResult.clear();
			$('#from').val('');
			$('#to').val('');
		})
	}

	$('body').on('click', '.datepicker-overlay', function () {
		if ($('html').hasClass('extra-popup-opened')) {
			calendar.close();
			calendarResult.close();
		}
	});

	var $customDate = $('.custom-date');
	if ($customDate) {
		$customDate.flatpickr({
			"locale": "ru",
			// defaultDate: 'today',
			altInput: true,
			clickopens: false,
			// wrap: true,
			altFormat: 'd M Y',
			maxDate: 'today',
			disableMobile: false
		});
	}

	var $customDateFrom = $('.custom-date--from');
	var $customDateTo = $('.custom-date--to');
	var $customDateContainer = $customDateFrom.closest('.form-row');

	if ($customDateFrom) {
		$.each($customDateContainer, function () {
			var $thisContainer = $(this);
			var dateFrom, dateTo;

			dateFrom = $thisContainer.find($customDateFrom).flatpickr({
				// minDate: 'today',
				"locale": "ru",
				altInput: true,
				clickopens: false,
				altFormat: 'd M Y',
				maxDate: 'today',
				disableMobile: false,
				onChange: function (el, date) {
					// console.log("dateTo: ", dateTo);
					// console.log("new Date().fp_incr(1): ", new Date(el).fp_incr(1));
					dateTo.set("minDate", date)
				}
			});

			dateTo = $thisContainer.find($customDateTo).flatpickr({
				// minDate: 'today',
				"locale": "ru",
				altInput: true,
				clickopens: false,
				altFormat: 'd M Y',
				maxDate: 'today',
				disableMobile: false,
				onChange: function (el, date) {
					dateFrom.set("maxDate", date)
				}
			});
		});
	}
}
/*datepicker initial end*/

/**
 * !extra popup jQuery plugin
 * */
(function ($) {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (libs);
	// 2) device.js (libs);
	// 3) resizeByWidth (resize only width);

	// add css style
	// .before-extra-popup-open{
	// 	width: 100%!important;
	// 	height: 100%!important;
	// 	max-width: 100%!important;
	// 	max-height: 100%!important;
	// 	margin: 0!important;
	// 	padding: 0!important;
	// 	overflow: hidden!important;
	// }

	// .before-extra-popup-open .wrapper{ z-index: 99; } // z-index of header must be greater than footer
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
			container: null, // main navigation container
			btnMenu: null, // element which opens or switches menu
			btnMenuClose: null, // element which closes a menu
			list: null, // menu
			listItem: null,
			listAnchor: 'a',
			staggerItems: null,
			overlay: '.nav-overlay', // overlay's class
			overlayAppendTo: 'body', // where to place overlay
			overlayAlpha: 0.8,
			overlayIndex: 997,
			classReturn: null,
			overlayBoolean: true,
			animationType: 'ltr', // rtl or ltr
			animationScale: 0.85, // default scale for animation
			animationSpeed: 300,
			animationSpeedOverlay: null,
			minWidthItem: 100,
			mediaWidth: null,
			closeOnResize: true,
			cssScrollBlocked: false, // add class to body for blocked scroll
			closeEsc: true, // close popup on click Esc
			stopClose: null // элементы по клику на которые, НЕ закрывается попап
		}, settings || {});

		var container = $(options.container),
			_animateSpeed = options.animationSpeed;

		var self = this;
		self.options = options;
		self.$mainContainer = $(options.mainContainer);            // . по умолчанию <html></html>
		self.$list = $(options.list);
		self.$btnMenu = $(options.btnMenu);
		self.$btnMenuClose = $(options.btnMenuClose);
		self.$container = container;
		self.$listItem = $(options.listItem, container);     // Пункты навигации;
		self.$listAnchor = $(options.listAnchor, container); // Элемент, по которому производится событие (клик);
		self.$staggerItems = options.staggerItems || self.$listItem;  //Элементы в стеке, к которым применяется анимация. По умолчанию listItem;

		self._animationType = options.animationType;
		self._animationScale = options.animationScale;
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
		self.cssScrollBlocked = options.cssScrollBlocked;
		self.closeEsc = options.closeEsc;

		self.desktop = device.desktop();

		self.modifiers = {
			active: 'active',
			opened: 'extra-popup-opened',
			beforeOpen: 'before-extra-popup-open'
		};

		self.outsideClick();
		if (self._mediaWidth === null || window.innerWidth < self._mediaWidth) {
			self.preparationAnimation();
		}
		self.toggleMenu();
		self.eventsBtnMenuClose();
		self.clearStyles();
		self.closeNavOnEsc();
		self.closeNavOnTrigger();
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

			if (self.navIsOpened) {
				self.closeNav();
			}

			e.stopPropagation();
		});
	};

	// click outside menu
	ExtraPopup.prototype.outsideClick = function () {
		var self = this;

		$(document).on('click', function () {
			if (self.navIsOpened) {
				self.closeNav();
			}
		});

		self.$container.on('click', function (e) {
			if (self.navIsOpened) {
				e.stopPropagation();
			}
		});

		var stopClose = self.options.stopClose;

		$('body').on('click', stopClose, function (e) {
			if (stopClose && self.navIsOpened) {
				e.stopPropagation();
			}
		});
	};

	// close popup on click to "Esc" key
	ExtraPopup.prototype.closeNavOnEsc = function () {
		var self = this;

		$(document).keyup(function (e) {
			if (self.navIsOpened && self.closeEsc && e.keyCode === 27) {
				self.closeNav();
			}
		});
	};

	// method close popup
	ExtraPopup.prototype.closeNavOnTrigger = function () {
		var self = this;
		var $mainContainer = self.$mainContainer;

		$mainContainer.on('closeExtraPopup', function () {
			if (self.navIsOpened) {
				self.closeNav();
			}
		})
	};

	// open nav
	ExtraPopup.prototype.openNav = function () {
		// console.log("openNav");

		var self = this,
			$html = self.$mainContainer,
			$container = self.$container,
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

		if (self.cssScrollBlocked) {
			self.cssScrollFixed();
		}

		$container.css({
			'-webkit-transition-duration': '0s',
			'transition-duration': '0s'
		});

		$container.trigger('extraPopupBeforeOpen');
		$('.js-choice-wrap').trigger('closeDrop');

		TweenMax.to($container, _animationSpeed / 1000, {
			xPercent: 0,
			scale: 1,
			autoAlpha: 1,
			ease: Cubic.easeOut,
			onComplete: function () {
				$html.addClass(classAfterOpen);
				$buttonClose.addClass(classAfterOpen);
				$container.trigger('extraPopupAfterOpen');

				// noScroll();
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
	ExtraPopup.prototype.closeNav = function () {
		// console.log("closeNav");

		var self = this,
			$html = self.$mainContainer,
			$container = self.$container,
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
			TweenMax.to($container, duration, {
				xPercent: -100,
				ease: Cubic.easeOut,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					TweenMax.set($container, {
						autoAlpha: 0
					});

					// canScroll();

					if (self.cssScrollBlocked) {
						self.cssScrollUnfixed();
					}
				}
			});

		} else if (_animationType === 'rtl') {
			TweenMax.to($container, duration, {
				xPercent: 100,
				ease: Cubic.easeOut,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					TweenMax.set($container, {
						autoAlpha: 0
					});

					// canScroll();

					if (self.cssScrollBlocked) {
						self.cssScrollUnfixed();
					}
				}
			});

		} else if (_animationType === 'surface') {
			TweenMax.to($container, duration, {
				scale: self._animationScale,
				autoAlpha: 0,
				ease: Cubic.easeOut,
				onComplete: function () {
					if (_mediaWidth === null || window.innerWidth < _mediaWidth) {
						self.preparationAnimation();
					}

					// canScroll();

					if (self.cssScrollBlocked) {
						self.cssScrollUnfixed();
					}
				}
			});

		} else {
			console.error('Type animation "' + _animationType + '" is wrong!')
		}

		self.navIsOpened = false;
	};

	// preparation element before animation
	ExtraPopup.prototype.preparationAnimation = function () {
		var self = this;

		var $container = self.$container,
			$staggerItems = self.$staggerItems,
			_animationType = self._animationType;

		// console.log('preparationAnimation: ', $container);

		if (_animationType === 'ltr') {
			TweenMax.set($container, {
				xPercent: -100,
				autoAlpha: 0,
				onComplete: function () {
					$container.show(0);
				}
			});
			// TweenMax.set($staggerItems, {
			// 	autoAlpha: 0,
			// 	scale: 0.6,
			// 	y: 50
			// });

		} else if (_animationType === 'rtl') {
			TweenMax.set($container, {
				xPercent: 100,
				autoAlpha: 0,
				onComplete: function () {
					$container.show(0);
				}
			});
			// TweenMax.set($staggerItems, {
			// 	autoAlpha: 0,
			// 	scale: 0.6,
			// 	y: 50
			// });

		} else if (_animationType === 'surface') {
			TweenMax.set($container, {
				scale: self._animationScale,
				autoAlpha: 0,
				onComplete: function () {
					$container.show(0);
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

	ExtraPopup.prototype.cssScrollFixed = function () {
		$('html').addClass('css-scroll-fixed');
	};

	ExtraPopup.prototype.cssScrollUnfixed = function () {
		$('html').removeClass('css-scroll-fixed');
	};

	// clearing inline styles
	ExtraPopup.prototype.clearStyles = function () {
		var self = this,
			$btnMenu = self.$btnMenu,
			$container = self.$container,
			$staggerItems = self.$staggerItems;

		//clear on horizontal resize
		if (self.closeOnResize === true) {

			$(window).on('resizeByWidth', function () {
				if (self.navIsOpened) {
					if (!$btnMenu.is(':visible')) {
						$container.attr('style', '');
						$staggerItems.attr('style', '');
						self.closeNav();
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
function popupsInit() {

	/*search advanced*/
	var popupSearchAdvanced = '.search-advanced-popup-js';

	if ($(popupSearchAdvanced).length) {

		new ExtraPopup({
			container: popupSearchAdvanced,
			btnMenu: '.btn-search-advanced-open-js',
			btnMenuClose: '.btn-popup-close-js',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationType: 'ltr',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true,
			stopClose: '.flatpickr-calendar, .datepicker-overlay'
		});

	}

	/*site map popup*/
	var siteMapPopupClass = '.site-map-js';

	if ($(siteMapPopupClass).length) {

		new ExtraPopup({
			container: siteMapPopupClass,
			list: '.site-map__list',
			btnMenu: '.btn-site-map-js',
			btnMenuClose: '.btn-popup-close-js',
			listItem: '.site-map__box',
			overlayAppendTo: 'body',
			closeOnResize: false,
			// mediaWidth: 1280,
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	/*navigation popup*/
	var navPopupClass = '.popup-nav-small-js';

	if ($(navPopupClass).length) {

		new ExtraPopup({
			container: navPopupClass,
			list: '.nav__list',
			btnMenu: '.btn-nav-open-js',
			btnMenuClose: '.btn-nav-small-close-js',
			listItem: '.nav__list li',
			overlayAppendTo: 'body',
			closeOnResize: true,
			// mediaWidth: 1280,
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	/*banners popup*/
	var popupBannersClass = '.popup-banners-js';

	if ($(popupBannersClass).length) {

		new ExtraPopup({
			container: popupBannersClass,
			btnMenu: '.btn-banners-open-js',
			btnMenuClose: '.btn-banners-close-js',
			overlayAppendTo: 'body',
			closeOnResize: true,
			animationType: 'rtl',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	/*news popup*/
	var popupNewsClass = '.popup-news-js';

	if ($(popupNewsClass).length) {

		new ExtraPopup({
			container: popupNewsClass,
			btnMenu: '.btn-news-open-js',
			btnMenuClose: '.btn-news-close-js',
			overlayAppendTo: 'body',
			closeOnResize: true,
			animationSpeed: 300,
			overlayAlpha: 0.3,
			cssScrollBlocked: true
		});

	}

	/*languages popup*/
	var popupLang = '.languages-popup-js';

	if ($(popupLang).length) {

		new ExtraPopup({
			container: popupLang,
			btnMenu: '.btn-language-open-js',
			btnMenuClose: '.btn-popup-close-js',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationType: 'surface',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	/*share popup*/
	var popupShare = '.share-popup-js';

	if ($(popupShare).length) {

		new ExtraPopup({
			container: popupShare,
			btnMenu: '.btn-share-open-js',
			btnMenuClose: '.btn-popup-close-js',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationType: 'surface',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	/*search popup*/
	var popupSearch = '.popup-search-js';
	var $popupSearch = $(popupSearch);

	if ($popupSearch.length) {

		new ExtraPopup({
			container: popupSearch,
			btnMenu: '.btn-search-open-js',
			btnMenuClose: '.btn-popup-close-js',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationType: 'surface',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	$popupSearch.on('extraPopupAfterOpen', function () {
		$(this).find('.search-form__input').focus();
	});

	/*filters popup*/
	var popupFilters = '.filters-popup-js';

	if ($(popupFilters).length) {

		new ExtraPopup({
			container: popupFilters,
			btnMenu: '.btn-filters-open-js',
			btnMenuClose: '.btn-popup-close-js',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationType: 'ltr',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
		});

	}

	/*filters popup*/
	var popupFiltersNews = '.filters-news-popup-js';

	if ($(popupFiltersNews).length) {

		new ExtraPopup({
			container: popupFiltersNews,
			btnMenu: '.btn-filters-news-open-js',
			btnMenuClose: '.btn-popup-close-js',
			overlayAppendTo: 'body',
			closeOnResize: false,
			animationType: 'ltr',
			animationSpeed: 300,
			overlayAlpha: 0.35,
			cssScrollBlocked: true
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
function breadcrumbsBehavior() {
	var $breadcrumbsItemHasDrop = $('.breadcrumbs__item_has-drop');
	if (DESKTOP) {
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
function stickyLayout() {

	if (!DESKTOP) {
		return;
	}

	var offsetTopBase = $('.header__top').outerHeight();

	/*sidebar top sticky*/
	var $sidebarTop = $(".sidebar-top");

	if ($sidebarTop.length) {

		var timeoutSidebarSticky;

		$(window).on('load resizeByWidth', function () {

			clearTimeout(timeoutSidebarSticky);
			timeoutSidebarSticky = setTimeout(function () {
				$sidebarTop.stick_in_parent({
					recalc_every: 1,
					parent: '.main-holder',
					offset_top: offsetTopBase
				});
			}, 200);

		});

		setTimeout(function () {
			$(window).trigger('resize');
		}, 1000) // shame
	}

	/*sidebar bottom heading sticky*/
	var $headingBottomHeading = $(".sidebar-bottom__heading");

	// if ($headingBottomHeading.length) {
	//
	// 	var timeoutHeadingSticky;
	//
	// 	console.log("$sidebarTop.outerHeight(): ", $(".sidebar-top").outerHeight());
	//
	// 	$(window).on('load resizeByWidth', function () {
	// 		clearTimeout(timeoutHeadingSticky);
	// 		timeoutHeadingSticky = setTimeout(function () {
	// 			$headingBottomHeading.stick_in_parent({
	// 				// recalc_every: 1,
	// 				parent: '.main-holder',
	// 				offset_top: $(".sidebar-top").outerHeight() + offsetTopBase
	// 			});
	// 		}, 200);
	//
	// 	});
	//
	// 	setTimeout(function () {
	// 		$(window).trigger('resize');
	// 	}, 1000) // shame
	// }

	/*sidebar content sticky*/
	var $sidebarBottomContent = $(".sidebar-bottom__content");

	if ($sidebarBottomContent.length) {

		var timeoutContentSticky;

		$(window).on('load resizeByWidth', function () {
			// var offsetTop = $sidebarTop.outerHeight() + $headingBottomHeading.outerHeight() + offsetTopBase;
			var offsetTop = $headingBottomHeading.outerHeight() + offsetTopBase;

			clearTimeout(timeoutContentSticky);
			timeoutContentSticky = setTimeout(function () {
				$sidebarBottomContent.stick_in_parent({
					// recalc_every: 1,
					parent: '.main-holder',
					offset_top: offsetTop
				});
			}, 200);

		});

		setTimeout(function () {
			$(window).trigger('resize');
		}, 1000) // shame
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
				}).on("sticky_kit:bottom", function (e) {
					$(e.target).addClass('is_bottom')
				}).on("sticky_kit:unbottom", function (e) {
					$(e.target).removeClass('is_bottom')
				});
			}, 200);

		});

		setTimeout(function () {
			$(window).trigger('resize');
		}, 1000) // shame
	}

	/*aside sticky*/
	var $aside = $(".aside__holder");

	if ($aside.length) {

		var timeoutAsideSticky;

		$(window).on('load resizeByWidth', function () {

			var offsetTop = offsetTopBase + 50;

			// if(window.innerWidth < 1600){
			// 	// $sidebar.trigger("sticky_kit:detach").attr('style','');
			// 	$aside.trigger("sticky_kit:detach").css('position','relative');
			// 	return;
			// }

			clearTimeout(timeoutAsideSticky);
			timeoutAsideSticky = setTimeout(function () {
				$aside.stick_in_parent({
					parent: '.content-layout',
					offset_top: offsetTop
				});
			}, 200);

		});

		setTimeout(function () {
			$(window).trigger('resize');
		}, 1000) // shame
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

		if ($thisContainer.hasClass(activeClass)) {
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
		theme: "minimal-dark",
		scrollInertia: 100,
		autoDraggerLength: true
	};

	if (DESKTOP) {
		var $regionMenuContainer = $('.region-menu-panel');
		if ($regionMenuContainer.length) {
			$regionMenuContainer.mCustomScrollbar({
				theme: "minimal-dark",
				scrollInertia: 100,
				autoDraggerLength: true,
				callbacks: {
					onInit: function (e) {
						var $this = $(this);
						$regionMenuContainer.mCustomScrollbar("scrollTo", $('.current', $this), {
							scrollInertia: 0
						});
					}
				}
			});
		}

		var $navMobileContainer = $('.popup-nav-small__holder');
		if ($navMobileContainer.length) {
			$navMobileContainer.mCustomScrollbar(customScrollOptions);
		}

		var $popupNewsContainer = $('.popup-news__holder');
		if ($popupNewsContainer.length) {
			$popupNewsContainer.mCustomScrollbar(customScrollOptions);
		}

		var $popupBannersContainer = $('.popup-banners__holder');
		if ($popupBannersContainer.length) {
			$popupBannersContainer.mCustomScrollbar(customScrollOptions);
		}
	}
}
/*custom scroll end*/

function blockedScrollOnPage() {
	$(window).on('load debouncedresize', function () {
		if (Modernizr.objectfit) { // shame: detect ie 11 and older
			if (window.innerWidth > 992) {
				$('.sidebar-region').on('mouseenter', function () {
					noScroll();
				}).on('mouseleave', function () {
					canScroll();
				});
			}
		}
	})
}

/**
 * !card switch
 * */
function frontBackSwitcher() {
	var $fbSwitcherContainer = $('.fb-switcher-container-js');

	if ($fbSwitcherContainer.length) {
		var $fbItem = $('.fb-switcher-item-js');
		var fbActiveClass = 'fb-switcher-active';
		var fbToggleAll = false;

		$fbSwitcherContainer.on('click', '.fb-switcher-handler-js', function (e) {
			e.preventDefault();

			var $fbHandler = $(this);
			var $fbCurrentItem = $fbHandler.closest($fbItem);

			if ($fbCurrentItem.hasClass(fbActiveClass)) {
				$fbCurrentItem.removeClass(fbActiveClass);
				fbChangeText('data-text');
			} else {
				if (fbToggleAll) {
					$fbItem.removeClass(fbActiveClass);
					fbChangeText('data-text');
				}
				$fbCurrentItem.addClass(fbActiveClass);
				fbChangeText('data-text-alt');
			}

			function fbChangeText(text) {
				$fbHandler.find('span').text($fbHandler.attr(text));
			}
		})
	}
}
/**
 * card switch end
 * */

/**
 * !text slide
 * */
function textSlide() {
	// external js:
	// 1) TweetMax VERSION: (lib.js);
	// 2) device.js 0.2.7 (lib.js);
	// 3) resizeByWidth (resize only width);

	var $textSlide = $('.text-slide-js');

	if (!$textSlide.length) return false;

	var $window = $(window),
		prefix = 'text-slide',
		textFull = 'Подробнее',
		textShort = 'Свернуть',
		$tplSlideFull = $('<div class="' + prefix + '__button text-full-js" style="display: none;"><a href="#" class="btn-arrow btn-arrow--bottom text-slide-switcher-js"><span>' + textFull + '</span></a></div>'),
		$tplTextSlideInner = $('<div class="text-slide-inner-js" />'),
		$tplShadow = $('<div class="text-slide-shadow-js" >'),
		textSlideHeight = $textSlide.outerHeight(),
		isTextFull = false,
		minHeight = parseInt($textSlide.css('line-height'), 10) * 9;

	// hide elements
	TweenMax.set($tplShadow, {autoAlpha: 0});
	// $tplSlideFull.hide(0);

	// build structure
	$textSlide
		.wrapInner($tplTextSlideInner)
		.after($tplSlideFull)
		.append($tplShadow);

	$window.on('load resize', function () {
		var wrapInnerHeight = $('.text-slide-inner-js').outerHeight();

		$textSlide.css('max-height', 'none');

		if (wrapInnerHeight <= minHeight) {
			TweenMax.set($textSlide, {height: 'auto'});
			TweenMax.set($tplShadow, {autoAlpha: 0});
			$tplSlideFull.hide(0);
		} else if (!isTextFull) {
			TweenMax.set($textSlide, {height: minHeight});
			TweenMax.set($tplShadow, {autoAlpha: 1});
			$tplSlideFull.show(0);

			textSlideHeight = $textSlide.outerHeight();
		}
	});

	$textSlide.parent().on('click', '.text-slide-switcher-js', function (e) {
		e.preventDefault();

		var wrapInnerHeight = $('.text-slide-inner-js').outerHeight();

		if (wrapInnerHeight <= minHeight) return false;

		var $this = $(this);

		if (isTextFull) {
			TweenMax.to($textSlide, 0.5, {
				height: textSlideHeight,
				ease: Power3.easeInOut,
				onComplete: function () {
					$textSlide.trigger('heightHeightChange');
				}
			});
			TweenMax.to($tplShadow, 0.5, {autoAlpha: 1});

			$this.removeClass('active').children('span').text(textFull);

			isTextFull = false;
		} else {
			TweenMax.to($textSlide, 0.5, {
				height: wrapInnerHeight,
				ease: Power3.easeInOut,
				onComplete: function () {
					TweenMax.set($textSlide, {height: 'auto'});
					$textSlide.trigger('afterHeightChange');

					isTextFull = true;
				}
			});

			TweenMax.to($tplShadow, 0.5, {autoAlpha: 0});
			$this.addClass('active').children('span').text(textShort);
		}
	});


	// sticky kit recalculate
	var textSlideTimeout;

	$textSlide.on('afterHeightChange', function () {
		clearTimeout(textSlideTimeout);

		textSlideTimeout = setTimeout(function () {
			$(document.body).trigger("sticky_kit:recalc");
		}, 100);
	})
}
/*text slide end*/

/**
 * !toggle state form buttons
 * */
function toggleFormButtons() {
	var $toggleButtonForm = $('.toggle-button-js');
	var activeClass = 'is-checked-all';

	if ($toggleButtonForm.length) {
		$.each($toggleButtonForm, function () {
			var $thisForm = $(this);
			// var $btnSubmit = $('input[type=submit]', $thisForm);
			var $btnReset = $('input[type=reset]', $thisForm);

			disabledButton($thisForm, $btnReset);
			// disabledButton($thisForm, $btnSubmit);

			if (checkProp($thisForm)) {
				enabledButton($thisForm, $btnReset);
			}

			var $toggle = $thisForm.find('.toggle-all-filters-js');
			if (checkProp($thisForm, true)) {
				$toggle.prop('checked', true);
				checkedToggleBtn($toggle, activeClass);
			} else {
				$toggle.prop('checked', false);
				uncheckedToggleBtn($toggle, activeClass);
			}

			setTotalCheckedInputs($thisForm);
		});
	}

	$toggleButtonForm.on('change', ':checkbox', function () {
		var $thisForm = $(this).closest($toggleButtonForm);
		var $btnSubmit = $('input[type=submit]', $thisForm);
		var $btnReset = $('input[type=reset]', $thisForm);

		disabledButton($thisForm, $btnReset);
		enabledButton($thisForm, $btnSubmit);

		if (checkProp($thisForm)) {
			enabledButton($thisForm, $btnReset);
		}

		var $toggle = $thisForm.find('.toggle-all-filters-js');
		if (checkProp($thisForm, true)) {
			$toggle.prop('checked', true);
			checkedToggleBtn($toggle, activeClass);
		} else {
			$toggle.prop('checked', false);
			uncheckedToggleBtn($toggle, activeClass);
		}

		setTotalCheckedInputs($thisForm);
	});

	$('.result-date-js').on('changeFlatpickr', function () {
		var $this = $(this);
		var $thisForm = $this.closest($toggleButtonForm);
		// var $val = $this.find('.flatpickr-input').val();

		enabledButton($thisForm, $thisForm.find('input[type=reset]'));
		enabledButton($thisForm, $thisForm.find('input[type=submit]'));
	});

	var closePopupTimeout;

	$toggleButtonForm.on('submit', function () {
		var $thisForm = $(this);
		var $btnSubmit = $('input[type=submit]', $thisForm);

		disabledButton($thisForm, $btnSubmit);

		// close popups after submit
		clearTimeout(closePopupTimeout);
		closePopupTimeout = setTimeout(function () {
			$('.filters-popup-js').trigger('closeExtraPopup');
			$('.filters-news-popup-js').trigger('closeExtraPopup');
		}, 350);
	});

	$toggleButtonForm.on('click', ':reset', function (e) {
		e.preventDefault();

		var $thisContainer = $(this).closest($toggleButtonForm);

		var $filterDate = $thisContainer.find('.result-date-js');
		if($filterDate.length) {
			$filterDate.trigger('clearFlatpickr');
		}

		$thisContainer.find(':checked').prop('checked', false).trigger('change');
	});

	$('.search-area').on('click', '.extended-search-reset-js', function (e) {
		e.preventDefault();

		var $thisContainer = $(this).closest('.search-area');

		var $filterDate = $thisContainer.find('.result-date-js');
		if($filterDate.length) {
			$filterDate.trigger('clearFlatpickr');
		}

		$thisContainer.find(':checked').prop('checked', false).trigger('change');

		setTimeout(function () {
			$thisContainer.find('form').submit();
		}, 200);
	});

	$('.toggle-all-filters-js', $toggleButtonForm).on('change', function () {

		var $thisToggle = $(this);
		var $allFilters = $thisToggle.closest($toggleButtonForm).find(':checkbox').not($thisToggle);

		if($thisToggle.prop('checked')){
			$allFilters.prop('checked', true);
			checkedToggleBtn($thisToggle, activeClass);
		} else {
			$allFilters.prop('checked', false);
			uncheckedToggleBtn($thisToggle, activeClass);
		}
		$allFilters.trigger('change');
	});

	function setTotalCheckedInputs($thisForm) {
		var $targetCountElement = $thisForm.closest('.search-area').find('.count-checked-filters-js');
		var totalLengthChecked = getTotalCheckedInputs($thisForm);

		$targetCountElement.text(totalLengthChecked);
		if (totalLengthChecked > 0) {
			$targetCountElement.closest('a').stop().fadeIn();
		} else {
			$targetCountElement.closest('a').stop().fadeOut();
		}
	}

	function getTotalCheckedInputs($form) {
		var $input = $form.find(':checkbox').not('.filters-options-js :checkbox');

		var totalCheckedInput = 0;

		$.each($input, function () {

			if ($(this).prop('checked')) {

				totalCheckedInput++;
			}
		});

		return totalCheckedInput;
	}

	function checkProp($form, cond) { // если cond === true, происходит сравнение количества все фильтров к отмеченым
		var $input = $form.find(':checkbox').not('.filters-options-js :checkbox');

		var hasCheckedInput = false;
		var countChecked = 0;

		$.each($input, function () {

			if ($(this).prop('checked')) {
				hasCheckedInput = true;

				if (cond !== true) {
					return false;
				}

				countChecked++;
			}
		});

		if (cond === true) {
			return $input.length === getTotalCheckedInputs($form);
		} else {
			return hasCheckedInput;
		}
	}

	function checkedToggleBtn($thisToggle, activeClass) {
		$thisToggle.addClass(activeClass);
		var $thiToggleParent = $thisToggle.parent();
		$thiToggleParent.children('span').html($thiToggleParent.data('text-alt'));
	}

	function uncheckedToggleBtn($thisToggle, activeClass) {
		$thisToggle.removeClass(activeClass);
		var $thiToggleParent = $thisToggle.parent();
		$thiToggleParent.children('span').html($thiToggleParent.data('text'));
	}

	function enabledButton($thisForm, $button) {
		$thisForm.addClass('form-has-checked');
		$button.prop('disabled', false);
	}

	function disabledButton($thisForm, $button) {
		$thisForm.removeClass('form-has-checked');
		$button.prop('disabled', true);
	}

}
/*toggle state form buttons end*/

/**
 * !toggle block jQuery plugin
 * */
(function ($) {
	// external js:

	var ToggleBlock = function (settings) {
		var options = $.extend({
			container: null, // общий котейнер
			content: null, // скрывающийся элемент
			opener: null, // открывающий элемент
			openClass: 'block-is-open', // класс, навешиваемый при открытии
			animationSpeed: 300, // скорость анимации
			openerHide: false // скрывать ли кнопку после открытия
		}, settings || {});

		var $container = $(options.container);

		this.options = options;
		this.$container = $container;
		this.$content = $(options.content, $container);
		this.$opener = $(options.opener, $container);
		this._animateSpeed = options.animationSpeed;
		this.openerHide = options.openerHide;

		this.modifiers = {
			open: options.openClass,
			openBtn: options.openClass + '--btn',
			openContent: options.openClass + '--content'
		};

		this.toggleBlock();
	};

	ToggleBlock.prototype.openerText = false;

	// toggle block
	ToggleBlock.prototype.toggleBlock = function () {
		var self = this;
		var $container = self.$container;

		self.$container.on('click', self.options.opener, function (e) {
			e.preventDefault();

			if ($container.hasClass(self.modifiers.open)) {
				self.closeBlock();

				return;
			}

			self.openBlock();

		})
	};

	// open block
	ToggleBlock.prototype.openBlock = function () {
		var self = this;
		var $opener = self.$opener;
		var $content = self.$content;
		var _animateSpeed = self.animateSpeed;

		self.$container.addClass(self.modifiers.open);
		$opener.addClass(self.modifiers.openBtn);
		$content.addClass(self.modifiers.openContent);

		$content.slideDown(_animateSpeed);

		if (self.openerHide) {
			$opener.fadeOut(_animateSpeed, function () {
				setTimeout(function () {
					$opener.remove();
				}, 500)
			})
		}

		var textClose = $opener.attr('data-text-close');

		if (!!textClose && textClose.length > 0) {
			if (!self.openerText) {
				self.openerText = $opener.text();
			}
			$opener.text(textClose);
		}
	};

	// close block
	ToggleBlock.prototype.closeBlock = function () {
		var self = this;
		var $opener = self.$opener;
		var $content = self.$content;

		self.$container.removeClass(self.modifiers.open);
		$opener.removeClass(self.modifiers.openBtn);
		$content
			.removeClass(self.modifiers.openContent)
			.slideUp(self.animateSpeed);

		var textClose = $opener.attr('data-text-close');
		if (!!textClose && textClose.length > 0) {
			$opener.text(self.openerText);
		}
	};

	window.ToggleBlock = ToggleBlock;

}(jQuery));

/**
 * !toggle block
 * */
function toggleBlockInit() {
	/*faq form*/
	var faqForm = '.toggle-block-js';

	if ($(faqForm).length) {

		new ToggleBlock({
			container: faqForm,
			content: '.toggle-block-content-js',
			opener: '.toggle-block-btn-js',
			openerHide: false
		});

	}
}
/*toggle block*/

/**
 * toggle contacts info
 */
function toggleContacts() {
	var $container = $('.header__info');

	if($container.length) {
		var activeClass = 'is-show';

		var $opener = $('<div />', {
			class: 'h-contacts-opener h-contacts-opener-js',
			html: '<i>&nbsp;</i>',
			click: function(e) {
				e.preventDefault();
				console.log(1);
			}
		});

		$container.append($opener.clone());

		$container.on('click', '.h-contacts-opener-js', function (e) {
			e.preventDefault();

			console.log(1);

			var $wrap = $(this).parent();

			$wrap.toggleClass(activeClass);
		});
	}
}
/*toggle contacts info end*/

/**
 * fit video to content
 */
function fitVidsInit() {
	$('.user-content iframe[src*="youtube"]').parent().fitVids();
}
/*fit video to content end*/

/**
 * !footer at bottom
 * */
function footerBottom() {
	var $footer = $('.footer__holder');

	if ($footer.length) {
		$('.main-frame').append($('<div class="spacer"></div>')); // need for sidebar's element sticky of bottom page

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
				'pointer-events': 'none', 'float': 'left',
				'width': '100%'
			});
		}
	}
}
/*footer at bottom end*/

/**
 * !department changer
 * */
function departmentChanger() {
	var $region = $('select.region');

	if ($region.length) {
		var $department = $('select.department');
		var changed = false;

		$(document).on('change', 'select.region', function(event){
			if(!changed){
				var department_id = $region.find('option:selected').data('department');

				if(department_id){
					var value = $department.find('option[data-department="' + department_id + '"]').val();
					$department.val(value).change();
				}

				changed = true;
			}
		});
	}
}
/*department changer end*/

/**
 * remove attribute from img on content
 * */
function removeAttrFromImg() {
	var $elem = $('.user-content').find('img');

	$.each($elem, function () {
		var $currentElem = $(this);
		if($currentElem.attr('width')) {
			$currentElem.attr('width', '');
		}
		if($currentElem.attr('height')) {
			$currentElem.attr('height', '');
		}
	})
}
/*remove attribute from img on content end*/

/**
 * wrap table to table-auto container
 * */
function wrapTable() {
	var $elem = $('.user-content').find('table');

	$.each($elem, function () {
		var $currentElem = $(this);
		var $parentCurrentElem = $currentElem.parent();
		var classAuto = "table-auto";

		if(!$parentCurrentElem.hasClass(classAuto)){
			$currentElem.wrap('<div class="' + classAuto + '"></div>');
		}
	})
}
/*wrap table to table-auto container end*/

/**
 * !form success for example
 * */
function formSuccessExample() {
	var $form = $('.user-form form');

	if ($form.length) {

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

$(window).on('load', function () {
	// $('html').addClass('page-loaded');
	customScrollInit();
	navExpander();
	removeAttrFromImg();
	wrapTable();
});

$(document).ready(function () {
	switchSpecialVersion();
	checkCecutientVersionCookie();
	placeholderInit();
	inputHasValueClass();
	inputFilledClass();
	// if (!Modernizr.touchevents) {
	// 	customSelect($('select.cselect'));
	// }
	customSelect($('select.cselect'));
	printShow();
	toggleHeader();
	fixedHeader();
	// behaviorLogoOnScroll();
	hoverClassInit();
	addAlignClass();
	scrollToSection();
	multiAccordionInit();
	// toggleLanguages();
	toggleDrop();
	selectSave();
	tabSwitcher();
	slidersInit();
	lightGalleryInit();
	equalHeightInit();
	masonryInit();
	popupsInit();
	fileInput();
	breadcrumbsBehavior();
	stickyLayout();
	regionMenu();
	datePickerInit();
	// blockedScrollOnPage();
	frontBackSwitcher();
	textSlide();
	toggleFormButtons();
	toggleBlockInit();
	toggleContacts();
	fitVidsInit();
	footerBottom();
	formSuccessExample();
	departmentChanger();
});