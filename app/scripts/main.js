/*global $, jQuery, app:true, Modernizr, FastClick */
/*some_used_var:false*/
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
		click: Modernizr.touch ? 'touchstart' : 'click'
	},
	gbl: {
		scrollY: 0
	}
};

(function($) {

// >> Init >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//

// -- fastclick ---------------
	FastClick.attach(document.body);

})(jQuery);
