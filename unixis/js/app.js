
'use strict';


// jQuery
$(function() {

  $('.side-menu li').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });


});

