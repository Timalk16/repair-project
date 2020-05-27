$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        modalMessage = $('.message');
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        $('.modal__form')[0].reset();
        $('em.invalid').remove();
        $('.modal__form').find(".invalid").removeClass("invalid");
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.removeClass('modal--visible');
        $('modal__form')[0].reset();
        $('em.invalid').remove();
        $('modal__form').find(".invalid").removeClass("invalid");
        modal.toggleClass('modal--visible');
    });
    // закрытие модального окна нажатием на esc
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
            $('.modal__form')[0].reset();
            $('em.invalid').remove();
            $('.modal__form').find(".invalid").removeClass("invalid");
            modal.toggleClass('modal--visible')
        }
    });

    // закрытие модального окна при клике вне него
    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal__form')[0].reset();
            $('em.invalid').remove();
            $('.modal__form').find(".invalid").removeClass("invalid");
            modal.toggleClass('modal--visible');
        }
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
    //
    $('.message__button').click(function () {
        modalMessage.toggleClass('message--visible');
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
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
        
             error.insertAfter($(element));
        },
        errorClass: "invalid",
        errorElement: "em",
        rules: {
            // compound rule
            policyModal: "required",
            userPhone: {
                required: true,
                minlength: 17,
        },
            userName: {
                required: true,
                minlength: 2
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
          policyModal: "Нажмите галочку",
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Обязательно укажите email",
            email: "Введите в формате: name@domain.com"
          }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    modalMessage.addClass('message--visible');
                },
                error: function (response) {
                    console.log('Ошибка запроса ' + response);
                  }
            });
          }
    });
    //валидация формы 2
    $('.control__form').validate({
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
        
             error.insertAfter($(element));
        },
        errorClass: "invalid",
        errorElement: "em",
        rules: {
            // compound rule
            policyCheckbox: "required",
            userPhone: {
                required: true,
                minlength: 17,
        },
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15,
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
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    modalMessage.addClass('message--visible');
                },
                error: function (response) {
                    console.log('Ошибка запроса ' + response);
                  }
            });
          }
    });
    //валидация формы 3
    $('.footer__form').validate({
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
        
             error.insertAfter($(element));
        },
        errorClass: "invalid",
        errorElement: "em",
        rules: {
            // compound rule
            policyFooter: "required",
            userPhone: {
                required: true,
                minlength: 17,
        },
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            userQuestion: {
                required: true,
            }
        },
        messages: {
            policyFooter: "Нажмите галочку",
            userPhone: "Телефон обязателен",
            userQuestion: "Задайте вопрос",
          userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв",
              maxlength: "Имя не длинее пятнадцати букв"
            },
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    modalMessage.addClass('message--visible');
                },
                error: function (response) {
                    console.log('Ошибка запроса ' + response);
                  }
            });
          }
    });

    //маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00');
    

    //map
      // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  setTimeout(function(){
	var elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = '//api-maps.yandex.ru/2.1/?apikey=c5d2f113-43c7-49b9-a946-6afe16d0b56b&lang=ru_RU';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);
 ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap.behaviors.disable('scrollZoom');
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Наш офис'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});


    
    



    new WOW().init();
    $('form').find('input').val("");

    });



