function vacanciesSlider() {
    var swiper = new Swiper('.vacancies .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.vacancies .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

vacanciesSlider()