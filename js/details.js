$(function () {
    'use strict';
    $(".info-list li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      $('.info-content .accordion-item, .removes').hide();
      $('.' + $(this).data('class')).fadeIn();
    });

    $(".info-list2 li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      $(".info-content2 .remo").hide();
      $("." + $(this).data("class")).fadeIn();
    });

    $(".uniBtns button").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".menu p").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".select2-container--default .select2-selection--single").click(function () {
      $(this).addClass("active");
      // $(".select2-selection__arrow b").addClass("active");
    });

});