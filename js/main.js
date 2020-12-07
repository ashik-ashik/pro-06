
$(document).ready(function(){


    // animation on Screen script
    function aos_init() {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true
        });
      }
      $(window).on('load', function() {
        aos_init();
      });
  
});
