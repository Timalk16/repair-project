$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    // закрытие модального окна нажатием на esc
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        modal.toggleClass('modal--visible');
    });
    
    // закрытие модального окна при клике вне него
    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    //медленный скролл
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 100) {
                $('#scroll_top').show();
            } else {
                $('#scroll_top').hide();
            }
        });
     
        $('#scroll_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    });
    //медленный скролл
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});
    //слайдер
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      })
         var next = $('.swiper-button-next');
         var prev = $('.swiper-button-prev');
         var bullets = $('.swiper-pagination');


        next.css('left', prev.width() + 20 + bullets.width() + 20 )
        bullets.css('left', prev.width() + 30 )
    
    //валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        errorElement: "em",
        rules: {
            // compound rule
            policyCheckbox: "required",
            userPhone: {
                required: true,
                minlength: 10,
        },
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userEmail: {
              required: true,
              email: true
            }
        },
        messages: {
          userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв",
              maxlength: "Имя не длинее пятнадцати букв"
        },
          policyCheckbox: "Нажмите галочку",
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Обязательно укажите email",
            email: "Введите в формате: name@domain.com"
          }
        }
    });
    //валидация формы 2
    $('.control__form').validate({
        errorClass: "invalid",
        errorElement: "em",
        rules: {
            // compound rule
            policyCheckbox: "required",
            userPhone: {
                required: true,
                minlength: 10,
        },
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            }
        },
        messages: {
            policyCheckbox: "Нажмите галочку",
            userPhone: "Телефон обязателен",
          userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв",
              maxlength: "Имя не длинее пятнадцати букв"
            },
        }
    });
    //валидация формы 3
    $('.footer__form').validate({
        errorClass: "invalid",
        errorElement: "em",
        rules: {
            // compound rule
            policyCheckbox: "required",
            userPhone: {
                required: true,
                minlength: 10
        },
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userQuestion: {
                required: true,
            }
        },
        messages: {
            policyCheckbox: "Нажмите галочку",
            userPhone: "Телефон обязателен",
            userQuestion: "Задайте вопрос",
          userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв",
              maxlength: "Имя не длинее пятнадцати букв"
            },
        }
    });

    //маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___/__/__"});




    new WOW().init();

    });



