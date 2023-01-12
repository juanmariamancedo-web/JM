export class SmallHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {menuOpen: false}

        this.handleChange = this.handleChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        this.hammerTime = new Hammer(document.body)
        this.hammerTime.on("swipeleft", ()=>{
            this.setState({menuOpen: false})
        })

        this.hammerTime.on("swiperight", ()=>{
            this.setState({menuOpen: true})
        })
    }

    handleChange(){
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render(){
        return(
            <div>
                <header className="header">
                    <div className="header__contenido">
                        <div className="header__hamburguesa-div">
                            <span className="header__hamburguesa icon" onClick={this.handleChange}>g</span>
                        </div>
                        <div className="header__logo-div">
                            <span className="header__logo">JModels</span>
                        </div>
                    </div>
                </header>
                <SideNav menuOpen={this.state.menuOpen} handleChange={this.handleChange}/>
            </div>
        )
    }
}

class SideNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.menuOpen){
            return(
                <nav className="nav nav--activo">
                <div className="nav__contenido">
                    <header className="nav__header">
                        <span className="nav__hamburguesa icon" onClick={this.props.handleChange}>h</span>
                    </header>
                    <ul className="nav__lista">
                        <li>
                            <a href="./index.html">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="./qué-nos-diferencia.html">
                                ¿Qué nos diferencia?
                            </a>
                        </li>
                        <li>
                            <a href="./por-qué-elegirnos.html">
                                ¿Por qué elegirnos?
                            </a>
                        </li>
                    </ul>
                </div>     
                </nav>
            )
        }

        return(
            <nav className="nav">
            <div className="nav__contenido">
                <header className="nav__header">
                    <span className="nav__hamburguesa icon" onClick={this.handleChange}>h</span>
                </header>
                <ul className="nav__lista">
                    <li>
                        <a href="./index.html">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="./qué-nos-diferencia.html">
                            ¿Qué nos diferencia?
                        </a>
                    </li>
                    <li>
                        <a href="./por-qué-elegirnos.html">
                            ¿Por qué elegirnos?
                        </a>
                    </li>
                </ul>
            </div>     
            </nav>
        )
        
    }
}
