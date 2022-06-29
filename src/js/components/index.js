function collectionSlider() {
    var swiper = new Swiper('.collection .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.collection .swiper-button-next',
            prevEl: '.collection .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
        }
    })
}

collectionSlider()

let mainImg = document.querySelector(".main__img")
let mainTitle = document.querySelector(".main__title")
let mainDesc = document.querySelector(".main__desc")


document.addEventListener("DOMContentLoaded", ready);

function ready() {
    animateMainContent()
};


function animateMainContent() {
    mainImg.classList.add("main__animate--show")
    console.log(true);
    setTimeout(() => {
        mainTitle.classList.add("main__animate--show")
        setTimeout(() => {
            mainDesc.classList.add("main__animate--show")
        }, 800);
    }, 800);
}