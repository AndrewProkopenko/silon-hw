$(document).ready(function(){
    $("#featured-carousel").owlCarousel({        
        // autoplay: true, 
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: { 
            0: { 
                items: 1,
                margin: 0,
            },
            900: { 
                items: 3,
                margin: 30,
            }
            
        }
    });
  });
