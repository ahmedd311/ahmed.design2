$(function () {
  'use strict';

  // adding scrolled class to navbar

  $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height() ) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    };
  });
  // adding scrolled class to navbar

  // changing the taps
  $('.tabs li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');

    $('.tabs-content div').hide();
    $('.' + $(this).data('class')).show();

    });
  // changing the taps


});
