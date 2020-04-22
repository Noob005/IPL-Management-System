$(document).ready(function(){
    
    
    
 /*------------------------------------------------------------STICKY NAVIGATON BAR----------------------------------------------------------------------*/

    $('.js--section-feautures').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
  }, {
    offset: '60px'
    });
    
    
    
    
    /*------------------------------------------------------------SCROLL BUTTONS------------------------------------------------------------------------*/
    
    $('.js--scroll-to-more').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-feautures').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-ticket').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-tickets').offset().top}, 1000); 
    });
                
    
    
});
                  
