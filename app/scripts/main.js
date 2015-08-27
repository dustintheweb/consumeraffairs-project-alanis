/*global $, jQuery, app:true, Modernizr, History, FastClick, emojione*/
/*jshint unused:false*/
/*jshint multistr:true*/
'use strict';

//## Config ########
//================================================
var app = {
	path: {
		url: window.location.protocol+'//'+window.location.host,
		currentUrl: window.location.href,
		img: '/media/images',
		cdnjs: '//cdnjs.cloudflare.com'
	},
	obj: {
		$window: $('window'),
		$html: $('html'),
		$body: $('body'),
		$header: $('body > .base > header'),
		$core: $('body > .base > .core'),
		$page: $('body > .base > .core > #page'),
		$layout: $('body > .base > .core > #page > .layout'),
		$main: $('body > .base > .core > #page > .layout > .main'),
		$section: $('section'),
		$footer: $('body > .core > footer')
	},
	ev: {
		//click: Modernizr.touch ? 'touchstart' : 'click'
	},
	gbl: {
		scrollY: 0
	}
};

// ACCORDION
(function ($) {
	$.fn.accordion = function (options) {
		var options = $.extend(true, {}, $.fn.accordion.defaults, options);
		return this.each(function (i) {
			var obj = $(this);
			obj.data('options', options);
			var handle = $(options.handle, obj);
			var content = $(options.content, obj);
			handle.click(function () {
				content.toggleClass(options.activestate);
			});
			if(options.initopen >= 0 && options.initopen == i){
				content.addClass(options.activestate);
			}
		});
	};
	$.fn.accordion.defaults = {
		activestate: 'active',
		handle: '> [class$="handle"]',
		content: '> [class$="content"]',
		initopen: -1
	};
})(jQuery);



(function($) {

// >> Init >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//

// -- fastclick ---------------
	//FastClick.attach(document.body);

	$('.newsletter').accordion({content: '> [class$="wrapper"]'});
})(jQuery);
