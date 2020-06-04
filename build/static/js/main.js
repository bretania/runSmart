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
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click',function(e){
        e.preventDefault();
        $('.catalog-item__product').eq(i).toggleClass('catalog-item__product_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');


  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: 'Пожалуйста, введите своё имя',
        phone: 'Пожалуйста, введите свой телефон',
        email: {
          required: 'Пожалуйста, введите свою почту',
          email: "Почта не в формате name@domain.com"
        }
      }
    });
  };

  validateForm('#consultation-form');
  validateForm('#consultation form');
  validateForm('#order form');

  $('input[name=phone]').mask('+7 (999) 999-99-99');
});