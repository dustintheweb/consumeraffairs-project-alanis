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
		//click: Modernizr.touch ? 'touchstart' : 'click'
	},
	gbl: {
		scrollY: 0
	}
};

(function ($) {
	// -- trigger action on resize once ----------
	$(window).resize($.debounce(250, true,
	    function() {
	        $(window).trigger('onResizeBegin');
	    }
	));
	$(window).resize($.debounce(250,
	    function() {
	        app.width = $(window).width();
	        app.height = $(window).height();
	        $(window).trigger('onResizeEnd');
	    }
	));
})(jQuery);


(function ($) {
	var iframe = $('iframe'),
		iScrollHeight = iframe.prop('scrollHeight');

})(jQuery);


// ACCORDION
(function ($) {
	$.fn.accordion = function (options) {
		var options = $.extend(true, {}, $.fn.accordion.defaults, options);
		return this.each(function (i) {
			var obj = $(this);
			obj.data('options', options);
			obj.data('accordion', true);
			var handle = $(options.handle, obj);
			var content = $(options.content, obj);
			handle.click(function () {
				obj.toggleClass(options.closedstate);
			});
			content.css('max-height', content.outerHeight());
			obj.addClass(options.closedstate)
			if(options.initopen >= 0 && options.initopen == i){
				obj.addClass(options.closedstate);
			}
		});
	};
	$.fn.accordion.defaults = {
		closedstate: 'closed',
		handle: '> [class$="handle"]',
		content: '> [class$="content"]',
		initopen: -1
	};
})(jQuery);

(function ($) {
	$.fn.showmore = function (options) {
		var options = $.extend(true, {}, $.fn.showmore.defaults, options);
		var objs = this;
		if($( window ).width() <= options.maxWidth){
			$.fn.showmore.init(objs, options);
		}
		$( window ).resize(function() {
			var windowWidth = $(window).width();
			if(windowWidth > options.maxWidth){
				$.fn.showmore.destroy(objs, options);
			}else{
				$.fn.showmore.init(objs, options);
			}
		});
	};
	$.fn.showmore.init = function(objs, options){
		return objs.each(function (i) {
			var obj = $(this);
			if(!obj.data('showmore')){
				obj.data('showmore',true);
				var headers = $(options.header, obj);
				headers.each(function(){
					var header = $(this);
					var wrapper = $('<div class="' + options.styleClass + '_wrapper" />');
					var content = $('<div class="' + options.styleClass + '_content" />')
						.appendTo(wrapper);
					var handle = $('<div class="' + options.styleClass + '_handle"><span>' + options.handleText + '</span></div>')
						.appendTo(wrapper);
					var items = header.nextUntil(options.header);
					if(items.length <= 0){
						items = header.children(options.items);
					}
					if(options.numShown > 0){
						items = items.slice(options.numShown);
					}
					wrapper.insertBefore(items.eq(0));
					content.append(items);
					wrapper.accordion();

				});
			}
		});
	};
	$.fn.showmore.destroy = function(objs, options){
		return objs.each(function (i) {
			var obj = $(this);
			if(obj.data('showmore')){
				obj.data('showmore', false);
				var wrappers = $('.' + options.styleClass + '_wrapper', obj);
				wrappers.each(function(){
					var wrapper = $(this);
					var content = $('.' + options.styleClass + '_content', wrapper);
					content.children().insertBefore(wrapper);
					wrapper.remove();
				});
			}
		});
	};
	$.fn.showmore.defaults = {
		items: 'li',
		header: 'ul',
		maxWidth: '600',
		numShown: 3,
		styleClass: 'showmore',
		handleText: 'See more'

	};
})(jQuery);

(function($) {

// >> Init >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//

// -- fastclick ---------------
	//FastClick.attach(document.body);

	$('.newsletter').accordion({content: '> [class$="wrapper"]'});
	$('.list-grid > dl').showmore({items: 'dd', header: 'dt'});

	// Waiting on images to load.
	$(window).load(function() {
	    $('.home-metro-grid .inner').showmore({handleText: 'More categories'});
	});
})(jQuery);
