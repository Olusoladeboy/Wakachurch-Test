$(document).ready(function(){
    $('.slider').bxSlider();
  });

  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });

  var owl = $('.owl-carousel');


  $('.owl-carousel').owlCarousel({
    stagePadding: 5,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// owl.owlCarousel({
//     stagePadding: 1000,
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoWidth: true,
//     autoHeight: true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:false
// });

