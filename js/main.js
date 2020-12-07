
$(document).ready(function(){

    // gototop
        $(window).scroll(function(){
          if($(this).scrollTop()>200){
              document.querySelector('.gototop').style.visibility = "visible";
              $('.gototop').fadeIn('slow');
          }else{
              $('.gototop').fadeOut('slow'); 
          }
      });

      $('.gocircle').click(function(){
          $('html, body').animate({scrollTop:0}, 1000)
      });

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
