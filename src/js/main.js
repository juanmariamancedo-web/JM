const consulta = window.matchMedia("(max-width: 600px)")

const hammertime = new Hammer(document.body);
hammertime.on('swipeleft', function(ev) {
    lista.classList.remove("header__lista--activo")
});

hammertime.on('swiperight', function(ev) {
    lista.classList.add("header__lista--activo")
});

const lista = document.getElementById("lista")
