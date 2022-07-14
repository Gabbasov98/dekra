function progressSlider() {
    var swiper = new Swiper('.progress__slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 12,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.progress__slider .swiper-button-next',
            prevEl: '.progress__slider .swiper-button-prev',
        },
        pagination: {
            el: '.progress__slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

progressSlider()