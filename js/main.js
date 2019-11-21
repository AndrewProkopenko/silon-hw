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
                margin: 15,
            },
            900: { 
                items: 3,
                margin: 30,
            }
            
        }
    });
  });
$(document).ready(function(){
    $("#popular-carousel").owlCarousel({        
        // autoplay: true, 
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: { 
            0: { 
                items: 1,
                margin: 15,
            },
            700: { 
                items: 3,
                margin: 15,
            },
            1100: { 
                items: 4,
                margin: 30,
            }
            
        }
    });
  });
