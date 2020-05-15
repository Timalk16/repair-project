
document.addEventListener("DOMContentLoaded", function(event){
    const modal = document.querySelector('.modal')
    const modalBtn = document.querySelectorAll('[data-toggle=modal]')
    const closeBtn = document.querySelector('.modal__close');
    const swichModal = () => {
        modal.classList.toggle('modal--visible');
    }   


    modalBtn.forEach(element => {
        element.addEventListener('click', swichModal);
    });
    // закрытие модального окна нажатием на esc
    document.addEventListener('keydown', function(element) {
        let keyCode = element.keyCode;
        if (keyCode === 27) {
            modal.classList.remove('modal--visible');
        
        }
    });

    
    // закрытие модального окна при клике вне него
    window.onclick = function (event) {
        if(event.target == modal)
            modal.classList.remove('modal--visible');
        }
    
    closeBtn.addEventListener('click', swichModal);
}); 


/*
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});
    
});
*/