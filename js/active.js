
$(document).ready(function() {



    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



     $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },

            1200:{
                items:3
            },

             992:{
                items:2
            },

            768:{
                items:2
            },
              767:{
                items:2
            },
          
          
        }
    })


        $('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



       $('.testimonial-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


       $('.brand-active').owlCarousel({
        loop:true,
        nav:false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1200:{
                items:6
            },
              992:{
                items:4
            },
            768:{
                items:3
            },
           767:{
              items:2
           }

        }
    })




     $('.video-popup').magnificPopup({

        type: 'iframe'


     })

    jQuery('#mobile-menu').meanmenu({

        meanScreenWidth:"767",
        meanMenuContainer:'. mobile-menu',
    })


})




