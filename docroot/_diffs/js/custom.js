// ******* Mobile menu Toggle ************//
$('.so-menu-toggle, .overlay-nav').click(function() {
  var navbar = $('#navbarNav');
  var overlay = $('.overlay-nav');
  overlay.toggleClass('block-overlay');
  navbar.toggleClass( "show" );
  $(this).toggleClass('toggle-active')
});

// ******* Smooth Scroll ************//
$('a.down-it[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 150
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

// ******* Enquire Toggle ************//
var enquireBtns = $('.enquirebtn,.close-enquirebtn');
enquireBtns.on('click',function(e){
  e.preventDefault();
  var enquireDiv = $('#enquire-div');
  var enquireExpand = 'enquire-expand';
  var enquireBtn = $('.enquirebtn');
  var enquireBtnClose = $('.close-enquirebtn');
  var enquireForm = $('.form-enquire');

  enquireDiv.toggleClass(enquireExpand);

  enquireForm.toggleClass('show');
  if(enquireDiv.hasClass(enquireExpand)) {
      enquireBtn.html('CLOSE');

  } else {
      enquireBtn.html('ENQUIRE');
  }
  e.preventDefault();
});

// **** Social Share
$("#share").jsSocials({
    shares: [ "facebook","linkedin", "twitter", "googleplus" ]
});

// **** Slick Carousel
$(function() {
  doInitSlickifyCarousel();

  $(window).resize(function(){
      var $windowWidth = $(window).width();
      if ($windowWidth > 1024) {
    	     doInitSlickifyCarousel();
      }

      mobileCheckSlick();
  });

function doInitSlickifyCarousel () {
  var CarouselSettings = new Object();
  CarouselSettings["autoplay"] = false;
  CarouselSettings["autoplaySpeed"] = 4000;
  CarouselSettings["delay"] = 5000;
  CarouselSettings["slidesToShow"] = 1;
  CarouselSettings["slidesToScroll"] = 1;
  CarouselSettings["speed"] = 700;
  CarouselSettings["dots"] = true;
  CarouselSettings["breakpoint"] = 1024;
  CarouselSettings["settings"] = "unslick";

  initSlickifyCarousel('.slick-carousel',CarouselSettings);


  CarouselSettings["slidesToShow"] = 3;
  CarouselSettings["dots"] = false;
  initSlickifyCarousel('.responsive-carousel',CarouselSettings);


  mobileCheckSlick();
}

  function initSlickifyCarousel(elem,CarouselSettings){
      $(elem).not('.slick-initialized').slick({
          autoplay: CarouselSettings.autoplay,
          autoplaySpeed: CarouselSettings.autoplaySpeed,
          delay: CarouselSettings.delay,
          slidesToShow: CarouselSettings.slidesToShow,
          slidesToScroll: CarouselSettings.slidesToScroll,
          speed: CarouselSettings.speed,
          dots: CarouselSettings.dots,
          responsive: [
              {
                  breakpoint: CarouselSettings.breakpoint,
                  settings: CarouselSettings.settings
              }
          ]
      });
  }

  function mobileCheckSlick(){
	  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	   $('.slick-carousel,.responsive-carousel').slick('unslick');
	  }
  }

});

// **** overrides
$('.site-add-controls a').on('click', function(){
  setTimeout(function(){ $('.lfr-has-add-content .lfr-add-panel.lfr-admin-panel .nav-list').hide().removeClass('nav').show(100); }, 500);

});
