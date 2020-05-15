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
    //слайдер
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
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


        next.css('left', prev.width() + 10 + bullets.width() + 10 )
        bullets.css('left', prev.width() + 10 )
    });

