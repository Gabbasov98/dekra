let selects = document.querySelectorAll("select")

selects.forEach(el => {
    el.onchange = function() {
        el.classList.add("selected")
    }
});