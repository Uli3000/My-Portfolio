import ProjectCard from "./ProjectCard"
import { ProyectoPokedex, ProyectoRentaGuna, ProyectoJavaScriptQuiz, ProyectoAtrapaElColor, ProyectoTraductor, ProyectoReticulasApp } from "../utils/projectsInfo"

function Projects() {
    return (
        <section id="Proyectos" className="max-w-[1320px]= z-40 sm:mx-20 mt-28">
            <h2 className="mt-4 font-[Onest] text-4xl font-semibold text-gray-100 mb-10 text-center">Proyectos</h2>
            <article className="content-center mb-8 ga gap-y-8 p-x-4 projects-grid">
                <ProjectCard title="Pokedex" description="Proyecto consumiendo la famosa PokeApi y pudiendo hacer busquedas faciles y contraladas de la informacion de los pokemons, cuenta con Scroll Infinito, uso del Local Storage y de la Context Api de React." tags={ProyectoPokedex} previewLink="https://pokeapi-uliversion.netlify.app/" codeLink="https://github.com/Uli3000/Pokedex-UliVersion" videoName="PokedexUVersion" />
                <ProjectCard title="RentaGuna" description="RentaGuna es un proyecto de rentas de propiedades, para poder publicar, crear y editar a tu gusto, con sistema de login, rutas protegidas y una autentifacion segura con JWT." tags={ProyectoRentaGuna} previewLink="https://rentaguna-production.up.railway.app/auth/login" codeLink="https://github.com/Uli3000/RentaGuna" videoName="RentaGuna" />
                <ProjectCard title="JavaScript Quiz" description="Quiz basico de JavaScript aprovechando el uso de estados globales de manera sencilla con Zustand, incluye persistencia de datos en el Local Storage y componentes visuales con MaterialUI." tags={ProyectoJavaScriptQuiz} previewLink="https://myjavascript-quiz.netlify.app" codeLink="https://github.com/Uli3000/JasvascriptQuiz" videoName="JavaScriptQuiz" />
                <ProjectCard title="Atrapa el color" description="Minijuego de atrapar el color con un boton y cada vez que se reinicia el juego se resetean los estados, basado en el juego de 'Bop It! Smash' manejando los hooks de React y sus renderizados." tags={ProyectoAtrapaElColor} previewLink="https://atrapa-el-color.netlify.app/" codeLink="https://github.com/Uli3000/Atrapa-el-color-ReactMiniGame" videoName="AtrapeElColor" />
                <ProjectCard title="Traductor Con CohereAI" description="Simulador del traductor de Google utilizando inteligencia artificial, con el modelo de Cohere, tipado en TypeScript y con uso de debounce." tags={ProyectoTraductor} previewLink="https://google-translator-simulator.netlify.app/" codeLink="https://github.com/Uli3000/GoogleTranslatorSimulator" videoName="GoogleTranslator" />
                <ProjectCard title="Reticulas App" description="Proyecto escolar manejando tecnologias basicas para manipular una base de datos en DB2 simulando ser un sistema escolar con subida de materia, planes de estudios y crear reticulas personalizadas." tags={ProyectoReticulasApp} previewLink="https://youtu.be/lfZa4flGt8Y" codeLink="https://github.com/Uli3000/AppReticulaTEC" videoName="ReticulasApp" />
            </article>
        </section>
    )
}

export default Projects