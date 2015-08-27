/*global jQuery, app*/
/*jshint unused:false*/

'use strict';

(function($) {
	// toggle active class on button classes
  app.obj.$body.on(app.ev.click, '[class*=btn], [class*=button]', function(e) {
  	e.preventDefault();
		e.stopPropagation();
  	$(this).toggleClass('active');
  });
})(jQuery);