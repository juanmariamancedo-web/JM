const consulta = window.matchMedia("(max-width: 600px)")

const lista = document.getElementById("lista");

const hammertime = new Hammer(document.body);

var menuAbierdo = false;
var anteriorMatches;

const activarEscuchadorDeCambiosDeResolucion = ()=>{
    hammertime.on('swipeleft', function(ev) {
        lista.classList.remove("header__lista--activo")

        if(menuAbierdo){
            botonDeHamburguesa.textContent = "X"
            menuAbierdo = !menuAbierdo
        }
    });
    
    hammertime.on('swiperight', function(ev) {
        lista.classList.add("header__lista--activo")
        
        if(!menuAbierdo){
            botonDeHamburguesa.textContent = "A"
            menuAbierdo = !menuAbierdo
        }
    });
}

if(consulta.matches){
    activarEscuchadorDeCambiosDeResolucion();
    anteriorMatches = true;
}else{
    anteriorMatches = false;
}

consulta.onchange = ()=>{
    if (consulta.matches) {
        if(!anteriorMatches){
            activarEscuchadorDeCambiosDeResolucion(); 
        }
        anteriorMatches = true;      
    }else{
        hammertime.off("swipeleft");
        hammertime.off("swiperight");
        menuAbierdo = false
        lista.classList.remove("header__lista--activo")
        anteriorMatches = false;      

    } 
}

const botonDeHamburguesa = document.getElementById("botonDeHamburguesa")
botonDeHamburguesa.addEventListener("click", ()=>{
    lista.classList.toggle("header__lista--activo")
    if(menuAbierdo){
        botonDeHamburguesa.textContent = "X"
    }else{
        botonDeHamburguesa.textContent = "A"
    }
    menuAbierdo = !menuAbierdo
})