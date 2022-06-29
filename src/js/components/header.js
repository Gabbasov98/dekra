let burger = document.querySelector(".header__burger")
let body = document.querySelector("body")

burger.onclick = function() {
    this.classList.toggle("header__burger--active")
    body.classList.toggle("fixed-body")
}