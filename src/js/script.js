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
    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });


  