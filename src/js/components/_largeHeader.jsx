export function LargeHeader(){
    return(
        <header className="header">
            <nav className="header__contenido">
                <h1 className="header__logo">JModels</h1>
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
                    <li>
                        <a href="https://juanman.wufoo.com/forms/z1j83afr1kl0fb0/" target="_blank" className="call-to-action">
                            ¡Trabaja con nosotros!
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}