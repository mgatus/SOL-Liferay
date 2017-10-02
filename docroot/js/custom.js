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
      enquireBtn.html('Close');

  } else {
      enquireBtn.html('Enquire');
  }
  e.preventDefault();
});

// **** Slick Carousel
// $(function() {
//   var maxWidth = 641,
//   slickVar = {
//     dots: true,
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     mobileFirst: false,
//     responsive: [
//       {
//         breakpoint: maxWidth,
//         settings: 'unslick'
//       }
//     ]
//   },
//   runSlick = function() {
//     $('.responsive-carousel').slick(slickVar);
//   };
//
//   // slick initialization while document ready
//   runSlick();
//
//   if (!/Mobi/.test(navigator.userAgent)) {
//     // listen to jQuery's window resize
//     $(window).resize(function(){
//         // reinit slick while window's width is less than maximum width (641px)
//         runSlick();
//     });
//   }
// });
//
// $(function() {
//   var maxWidth = 1024,
//   slickVar = {
//     dots: true,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     mobileFirst: false,
//     responsive: [
//       {
//         breakpoint: maxWidth,
//         settings: 'unslick'
//       }
//     ]
//   },
//   runSlick = function() {
//     $('.slick-carousel').slick(slickVar);
//   };
//
//   // slick initialization while document ready
//   runSlick();
//
//   if (!/Mobi/.test(navigator.userAgent)) {
//     // listen to jQuery's window resize
//     $(window).resize(function(){
//         // reinit slick while window's width is less than maximum width (641px)
//         runSlick();
//     });
//   }
// });

$(function() {
  function slickifyOne(){
      $('.slick-carousel').not('.slick-initialized').slick({
          autoplay: false,
          autoplaySpeed: 4000,
          delay: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 700,
          dots: true,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: "unslick"
              }
          ]
      });
  }
  slickifyOne();

  function slickifyTwo(){
      $('.responsive-carousel').not('.slick-initialized').slick({
          autoplay: false,
          autoplaySpeed: 4000,
          delay: 5000,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 700,
          dots: true,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: "unslick"
              }
          ]
      });
  }
  slickifyTwo();

  $(window).resize(function(){
      var $windowWidth = $(window).width();
      if ($windowWidth > 1024) {
    	   slickifyOne();
         slickifyTwo();
      }
  });
});

// **** overrides
$('.site-add-controls a').on('click', function(){
  setTimeout(function(){ $('.lfr-has-add-content .lfr-add-panel.lfr-admin-panel .nav-list').hide().removeClass('nav').show(100); }, 500);

});
