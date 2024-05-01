(function($) {

  "use strict";

  // init Chocolat light box
  const initChocolat = function() {
  Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // document ready
  $(document).ready(function(){
    initChocolat();
  });

})(jQuery);