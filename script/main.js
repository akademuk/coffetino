// Burger
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const body = document.body;

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.removeф('active');
    burger.classList.remove('active');
    body.classList.remove('active');
});

// Automatic slider
const swiper = new Swiper('.automatic-swiper', {
    spaceBetween: 10,
    slidesPerView: "auto",
    //centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 8000,
});

// Header fixed
const header = document.getElementById('header');
function checkScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

function initSwiperWithControls() {
    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination', // Убедитесь, что у вас есть этот элемент, если используете пагинацию
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                updateActiveControl(this.realIndex);
            },
        },
    });

    // Инициализируем активный контроль на основе начального слайда
    updateActiveControl(swiper.realIndex);

    // Добавляем обработчики кликов для пользовательских контролов
    const controls = document.querySelectorAll('.controls .control');
    controls.forEach(control => {
        control.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'), 10);
            swiper.slideToLoop(index); // Переходит к указанному слайду с учетом цикла
        });
    });

    // Добавляем обработчики кликов для дополнительных стрелок навигации
    const customNext = document.querySelector('.custom-next');
    const customPrev = document.querySelector('.custom-prev');

    if (customNext) {
        customNext.addEventListener('click', () => {
            swiper.slideNext();
        });
    }

    if (customPrev) {
        customPrev.addEventListener('click', () => {
            swiper.slidePrev();
        });
    }
}

// Vertical Slider
function updateActiveControl(activeIndex) {
    const controls = document.querySelectorAll('.controls .control');
    controls.forEach(control => {
        control.classList.remove('active');
    });
    const activeControl = document.querySelector(`.controls .control[data-index="${activeIndex}"]`);
    if (activeControl) {
        activeControl.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', initSwiperWithControls);

// Anchor scroll
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 800, 'swing');
    });
});


