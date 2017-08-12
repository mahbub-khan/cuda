 $(document).ready(function(){
       $('.portfolio-items').isotope({
              itemSelector: '.single-item',
              layoutMode: 'fitRows',
       });
              
//isotope click function
       $('.portfolio-filters li').click(function{
              $('.portfolio-filters li').removeClass("active");
              $(this).addClass("active");

              var selector= $(this).attr('data-filter');
              $('.portfolio-items').isotope({
                     filter:selector,
                     animationOptions: {
                            duration: 5000,
                            easing: 'linear',
                            queue: false,
                     }
              });
              return false;
       });

});