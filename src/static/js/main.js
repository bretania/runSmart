$(document).ready(function(){
    $('.slider__iner').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../src/static/img/left-arrow.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../src/static/img/right-arrow.png"></img></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true,
                dotsClass: 'slick-dots'
              }
            }
          ]
    });
});