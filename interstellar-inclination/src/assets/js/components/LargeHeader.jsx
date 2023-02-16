export function LargeHeader(){
    return(
        <header className="fixed w-full flex bg-cyan-400 h-14 justify-center items-center">
            <nav className="container flex justify-between items-baseline px-3">
                <a href="/"><span className="font-mono text-3xl">Markdown</span></a>
                <ul className="flex gap-x-3 align-baseline text-lg" id="lista">
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
        </header>
    )
}

/*export function LargeHeader(){
    return(
        <header className="fixed w-full flex bg-cyan-400  dark:bg-slate-800 dark:text-white h-14 items-center">
            <nav className="container flex justify-between items-baseline px-3">
                <a href="/"><span className="font-mono text-3xl">Markdown</span></a>
                <ul className="flex gap-x-3 align-baseline" id="lista">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li><a href="/about">Acerca de</a></li>
                    <li>
                        <ButtonDarkMode />
                    </li>
                </ul>
            </nav>
        </header>
    )
} */