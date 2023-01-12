export function LargeHeader(){
    return(
        <header className="header">
            <nav className="header__contenido">
                <span className="header__logo">JModels</span>
                <ul className="header__lista" id="lista">
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
            </nav>
        </header>
    )
}