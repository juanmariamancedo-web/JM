import React from "react"
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
                <header className="fixed w-full flex bg-cyan-400 dark:bg-slate-800 dark:text-white h-14 justify-center items-center">
                    <div className="w-full h-full">
                        <div className="flex ml-3 absolute h-full items-center z-10">
                            <span className="icon-bars align-middle" onClick={this.handleChange}></span>
                        </div>
                        <div className="flex absolute w-full h-full justify-center items-center">
                        <a href="/"><span className="font-mono text-3xl">Markdown</span></a>
                        </div>
                    </div>
                </header>
                <SideNav menuOpen={this.state.menuOpen} handleChange={this.handleChange}/>
            </div>
        )
    }
}

export function SideNav(props){
    let classNameNav = props.menuOpen? "": "-translate-x-full "
     return(
         <nav className={classNameNav + "transition-transform duration-1000 h-screen fixed flex bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900 dark:text-white z-10 inset-0"}>
            <div className="relative h-14 z-10 flex items-center">
                    <span className="ml-3 icon-times align-middle" onClick={props.handleChange}></span>
            </div>          
            <ul className="absolute inset-0 flex flex-col justify-center items-center gap-3 text-lg">
                 <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/qué-nos-diferencia">
                        ¿Qué nos diferencia?
                    </a>
                </li>
                <li>
                    <a href="/por-qué-elegirnos">
                        ¿Por qué elegirnos?
                    </a>
                </li>
                <li>
                    <a href="https://juanman.wufoo.com/forms/z1j83afr1kl0fb0/" target="_blank" className="bg-yellow-400 px-3 py-2 rounded-3xl">
                        ¡Trabaja con nosotros!
                    </a>
                </li>
            </ul>    
        </nav>
     )
 }
