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
            modal.removeClass('modal--visible')
        }
    });

    // закрытие модального окна при клике вне него
    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal__form')[0].reset();
            $('em.invalid').remove();
            $('.modal__form').find(".invalid").removeClass("invalid");
            modal.removeClass('modal--visible');
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
    $('.message__button').click(function () {
        modalMessage.toggleClass('message--visible');
    });
    $('.message__dialog').click(function () {
      if (eventObject.which == 27) {
        modalMessage.removeClass('message--visible');
      }
  });
    //медленный скролл
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top- $(".header").outerHeight()}, 1500);
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
    

   //Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [47.244729, 39.723187], // координаты центра на карте
    zoom: 17, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
      balloonContent: "Наш офис",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/pin.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.behaviors.disable('scrollZoom');
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '465',
          width: '100%',
          videoId: 'RHzzLqJWqHs',
          events: {
            'onReady': videoPlay,
          }
        });
      })


      function videoPlay(event) {
          event.target.playVideo();
      }


      
    
    



    new WOW().init();
    $('form').find('input').val("");

    });



