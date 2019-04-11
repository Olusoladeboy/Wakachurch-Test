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
owl.owlCarousel({
    items:4,
    loop:true,
    margin:0,
    autoplay:true,
    autoWidth: true,
    autoHeight: true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
});