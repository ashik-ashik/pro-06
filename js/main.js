
$(document).ready(function(){



  // client slider
  $('#clientSlider').owlCarousel({
    loop:true,
    margin:25,
    autoplay:true,
    dots:true,
    responsive:{
      500:{
        items:1,
      },
      767:{
        items:3,
      },
      992:{
        items:4,
      }
    }
  })

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
