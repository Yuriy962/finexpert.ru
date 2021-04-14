
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    //menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
        //menuList.classList.toggle('container');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-active');
        })
    });
});

if($(window).width() < 1161){
    $(".cities__item").click(function() { 
        $(this).toggleClass('cities__item-active');
    
        if($(this).find('.cities__wrapper').text() !== ''){//Если текст есть
            $(this).find('.cities__wrapper').slideToggle();// плавно спускаем вниз текст ответа на вопрос
        }
    });
}

$(".city").click(function () {
    $(this).toggleClass('city-active');
});
