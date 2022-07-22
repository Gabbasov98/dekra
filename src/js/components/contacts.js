let contactsTabs = document.querySelectorAll(".contacts-tab")


contactsTabs.forEach(el => {
    el.onclick = function () {
        let maps = document.querySelectorAll(".map")
        let mapId = el.getAttribute("data-map")
        contactsTabs.forEach(el2 => {
            el2.classList.remove("orange-text")
        })
        el.classList.add("orange-text")
        maps.forEach(map => {
            map.classList.remove("map--active")
        })
        document.getElementById(`map${mapId}`).classList.add("map--active")
    }
})

