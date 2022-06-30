function progressSlider() {
    var swiper = new Swiper('.progress__slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.progress__slider .swiper-button-next',
            prevEl: '.progress__slider .swiper-button-prev',
        },
    })
}

progressSlider()