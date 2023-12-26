let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    },

    pagination: {
        el: '.swiper-pagination',
    },

    keyboard: true,
});