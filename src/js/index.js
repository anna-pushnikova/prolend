import 'owl.carousel';
import tippy from 'tippy.js';

$(document).ready(function() {

  let header = $("#header"),
      introHeight = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop(),
      scrollUp = $("#scrollUp"),
      dropdown = document.getElementById("dropdown");
  
  let tippyOptions = {
    content: dropdown.innerHTML,
    interactive: true,
    allowHTML: true,
    placement: "bottom",
    animation: "shift-away-subtle",
    theme: "light-border",
    inertia: true
  }

  /* Display Fixed Header and Scroll Up */

  checkScroll(scrollOffset);
  
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

    $("#nav").removeClass("active");
    $("#nav-toggler").removeClass("active");

  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introHeight) {
      header.addClass("header--fixed");
      scrollUp.css("display", "block");
    } else {
      header.removeClass("header--fixed");
      scrollUp.css("display", "none");
    }
  }

  /* Scroll Up */

  $("#scrollUp").on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
  });

  /* Nav dropdown */
  
  tippy('#nav__pages', tippyOptions);

  /* Nav Scroll */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        elementId = $this.data('scroll'),
        elementOffset = $(elementId).offset().top;

    $("html, body").animate({
      scrollTop: elementOffset
    }, 500)
  })

  /* Nav-toggler */

  $("#nav-toggler").on("click", function() {
    let $this = $(this);

    $this.toggleClass("active");
    $("#nav").toggleClass("active");
  })

  /* Owl Carousel */

  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    dots: false,
    margin: 20,
    responsive: {
      0: {
          items: 1,
          nav: true,
          dots: false,
          smartSpeed: 1000,
          autoplay: true,
          autoplayTimeout: 4000
      },
      576: {
          items: 2
      },
      768: {
          items: 3
      },
      992: {
          items: 4
      }
    }
  })
})
