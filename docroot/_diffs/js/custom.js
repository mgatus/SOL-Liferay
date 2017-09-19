// ******* Mobile menu Toggle ************//
$('.so-menu-toggle, .overlay-nav').click(function() {
  var navbar = $('#navbarNav');
  var overlay = $('.overlay-nav');
  overlay.toggleClass('block-overlay');
  navbar.toggleClass( "show" );
  $(this).toggleClass('toggle-active')
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
$(function() {
  var maxWidth = 641,
  slickVar = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: false,
    responsive: [
      {
        breakpoint: maxWidth,
        settings: 'unslick'
      }
    ]
  },
  runSlick = function() {
    $('.responsive-carousel').slick(slickVar);
  };

  // slick initialization while document ready
  runSlick();

  if (!/Mobi/.test(navigator.userAgent)) {
    // listen to jQuery's window resize
    $(window).resize(function(){
        // reinit slick while window's width is less than maximum width (641px)
        runSlick();
    });
  }
});

// **** overrides
$('.site-add-controls a').on('click', function(){
  setTimeout(function(){ $('.lfr-has-add-content .lfr-add-panel.lfr-admin-panel .nav-list').hide().removeClass('nav').show(100); }, 500);

});
