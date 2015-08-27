/*global jQuery, app*/

// >> Specific Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//
// -- More Specific Section -----------------------------------------------------------------------
//
(function($) {
    'use strict';
    var $somevar = app.obj.$footer.find('.somevar'),
        $somevar2 = $somevar.find('.somevar2');

    var someFunction = function() {
      // stuff
    };

    // Toggle ------------------
    //
    // Click
    $mobileMenuButton.on('click', function(event) {
        // toggle
    });
})(jQuery);

// -- Another More Specific Section -----------------------------------------------------------------------
//
(function($) {
    'use strict';
    var $somevar3 = app.obj.$footer.find('.somevar3'),
        $somevar4 = $somevar.find('.somevar4');

    console.log('stuff');
})(jQuery);
