$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 900,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/chevron-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icon/chevron-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
  });
  