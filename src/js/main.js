import { Header } from "./components/_Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<Header/>)

/*const lista = document.getElementById("lista");

const hammertime = new Hammer(document.body);

var menuAbierdo = false;
var anteriorMatches;

const activarEscuchadorDeCambiosDeResolucion = ()=>{
    hammertime.on('swipeleft', function(ev) {
        lista.classNameNameList.remove("header__lista--activo")

        if(menuAbierdo){
            botonDeHamburguesa.textContent = "X"
            menuAbierdo = !menuAbierdo
        }
    });
    
    hammertime.on('swiperight', function(ev) {
        lista.classNameList.add("header__lista--activo")
        
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
        lista.classNameList.remove("header__lista--activo")
        anteriorMatches = false;      

    } 
}

const botonDeHamburguesa = document.getElementById("botonDeHamburguesa")
botonDeHamburguesa.addEventListener("click", ()=>{
    lista.classNameList.toggle("header__lista--activo")
    if(menuAbierdo){
        botonDeHamburguesa.textContent = "X"
    }else{
        botonDeHamburguesa.textContent = "A"
    }
    menuAbierdo = !menuAbierdo
})

function Header (){
    return(
        <p>dfdsf</p>
    )
}

*/