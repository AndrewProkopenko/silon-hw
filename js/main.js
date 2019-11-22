$(document).ready(function(){
    $("#featured-carousel").owlCarousel({        
        autoplay: true, 
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
        autoplay: true, 
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: { 
            0: { 
                items: 1,
                margin: 15,
            },
            800: { 
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
$(document).ready(function(){
    $("#trending-carousel").owlCarousel({        
        autoplay: true, 
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        loop: true,
        items:1,
        responsive: { 
          
            600: { 
                items: 2,
                margin: 15,
            }
            
        }
    });
  });
