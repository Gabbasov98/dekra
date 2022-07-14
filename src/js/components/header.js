let burger = document.querySelector(".header__burger")
let body = document.querySelector("body")
let header = document.querySelector("header")

burger.onclick = function() {
    header.classList.toggle("header--active")
    body.classList.toggle("fixed-body")
}
