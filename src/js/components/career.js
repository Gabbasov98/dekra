function vacanciesSlider() {
    var swiper = new Swiper('.vacancies .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.vacancies .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

vacanciesSlider()

let screenWidth = window.innerWidth
let careerImages = document.querySelectorAll(".career__right img")

setCareerImgWidth()
console.log(screenWidth);



function setCareerImgWidth() {
    if(window.innerWidth<768){
        return
    }
    careerImages.forEach(el => {
        let width = screenWidth / 100 * 48.7
        console.log(width);
        el.style.width = `${width}px`
    });
}

window.onresize = function() {
    screenWidth = window.innerWidth
    setCareerImgWidth()
}
