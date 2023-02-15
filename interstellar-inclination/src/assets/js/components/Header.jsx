import { LargeHeader } from "./LargeHeader.jsx"
import { SmallHeader } from "./SmallHeader.jsx"
import React from "react"

export class Header extends React.Component{
    constructor(props){
        super(props)
        this.consulta = window.matchMedia("(max-width: 1024px)")
        this.state ={
            small: this.consulta.matches
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.consulta.onchange = ()=>{
            this.setState({small: this.consulta.matches})
        }
    }

    render(){
        if(this.state.small){
            return(
                <SmallHeader/>
            )
        }else{
            return(
                <LargeHeader/>
            )
        }
    }
}



/*
<header className="header">
                <nav className="header__contenido">
                    <div className="header__hamburguesa">
                        <p id="botonDeHamburguesa">X</p> 
                    </div>
                    <div className="header__navegacion">
                        <span className="header__logo">JModels</span>
                        <ul className="header__lista" id="lista">
                            <li>Inicio</li>
                            <li>¿Qué nos diferencia?</li>
                            <li>¿Por qué elegirnos?</li>
                        </ul>
                    </div>
                </nav>
                </header>  */

