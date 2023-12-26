let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {

        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        }
    },

    pagination: {
        el: '.swiper-pagination',
    },

    keyboard: true,
});