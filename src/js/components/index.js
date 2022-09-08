function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })
}


window.onresize = function() {
    setCollectionBtnWidth()
};


let collectionPrev = document.querySelector(".collection__slider-prev")
let collectionNext = document.querySelector(".collection__slider-next")

setCollectionBtnWidth()

function setCollectionBtnWidth() {
    let containerWidth = document.querySelector(".collection__slider").offsetWidth
    let pageWidth = window.innerWidth
    let btnWidth = (pageWidth - containerWidth) / 2
    collectionPrev.style.width = `${btnWidth}px`
    collectionNext.style.width = `${btnWidth}px`
}

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
                slidesPerView: 1.1,
            },
            360: {
                slidesPerView: "auto",
            },
            1200: {
                slidesPerView: 4,
            },
        }
    })

    collectionPrev.onmouseover = function(){
        swiper.autoplay.start();
        swiper.autoplay.delay = 500;
        swiper.autoplay.reverseDirection = true;
    }

    collectionPrev.onmouseleave = function(){
        swiper.autoplay.stop();
        swiper.autoplay.reverseDirection = false;
    }

    collectionNext.onmouseover = function(){
        swiper.autoplay.start();
        swiper.autoplay.delay = 500;
    }

    collectionNext.onmouseleave = function(){
        swiper.autoplay.stop();
    }

    // $(".swiper-container").mouseenter(function() {
    //     mySwiper.autoplay.stop();
    //     console.log('slider stopped');
    // });
}

function infoSlider() {
    var swiper = new Swiper('.info .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                loop: true,
            },
            576: {
                slidesPerView: 3,
                loop: true,
            },
            992: {
                slidesPerView: "auto",
                loop: false,
            },
        }
    })
}


mainSlider()
collectionSlider()
infoSlider()

let mainImg = document.querySelector(".main__img")
let mainTitle = document.querySelector(".main__title")
let mainDesc = document.querySelector(".main__desc")


document.addEventListener("DOMContentLoaded", ready);

function ready() {
    if (mainImg && mainTitle && mainDesc) {
        animateMainContent()
    }
};


function animateMainContent() {
    mainImg.classList.add("main__animate--show")
    setTimeout(() => {
        mainTitle.classList.add("main__animate--show")
        setTimeout(() => {
            mainDesc.classList.add("main__animate--show")
        }, 800);
    }, 800);
}


