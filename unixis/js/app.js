
'use strict';


// jQuery
$(function() {

  $('.side-menu li').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  $('.copy').on('click', function() {
    $('.copy-success').addClass('copied');
    setTimeout(function(){
      // toggle another class
      $('.copy-success').removeClass('copied');  
    }, 2000);
  });

  $(window).on('scroll', function() {
    const windowH = $(window).scrollTop(),
          footerH = $('.footer').offset().top + $('.backtotop').outerHeight() - window.innerHeight,
          gap = windowH - footerH;

    if (windowH <= 200) {
      $('.backtotop').removeClass('show').addClass('hide')
    }
    if (windowH > 200) {
      $('.backtotop').removeClass('hide').addClass('show')
    }
    if (windowH > 200 && windowH >= footerH - 40) {
      $('.backtotop').addClass('fixed').css('top', -40 - gap);
    }
    else {
      $('.backtotop').removeClass('fixed')
    }
    // console.log(windowH, gap)
  });


});

