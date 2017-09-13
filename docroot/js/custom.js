// ******* Mobile menu Toggle ************//
$('.so-menu-toggle, .overlay-nav').click(function() {
  let navbar = $('#navbarNav');
  let overlay = $('.overlay-nav');
  overlay.toggleClass('block-overlay');
  navbar.toggleClass( "show" );
  $(this).toggleClass('toggle-active')
});

// ******* Enquire Toggle ************//
var enquireBtns = $('.enquirebtn,.close-enquirebtn');
enquireBtns.on('click',function(e){
  let enquireDiv = $('#enquire-div');
  let enquireExpand = 'enquire-expand';
  let enquireBtn = $('.enquirebtn');
  let enquireBtnClose = $('.close-enquirebtn');
  let enquireForm = $('.form-enquire');
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
  $('.responsive-carousel').slick({
    centerMode: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

// **** overrides
$('.site-add-controls a').on('click', function(){
  setTimeout(function(){ $('.lfr-has-add-content .lfr-add-panel.lfr-admin-panel .nav-list').hide().removeClass('nav').show(100); }, 500);

});
