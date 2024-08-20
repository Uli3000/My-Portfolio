import ProjectCard from "./ProjectCard"
import { ProyectoPokedex, ProyectoRentaGuna, ProyectoJavaScriptQuiz, ProyectoAtrapaElColor, ProyectoTraductor, ProyectoReticulasApp } from "../utils/projectsInfo"

function Projects() {
    return (
        <section id="Proyectos" className="max-w-[1320px]= z-40 sm:mx-20 mt-28">
            <h2 className="mt-4 font-[Onest] text-4xl font-semibold text-gray-100 mb-10 text-center">Proyectos</h2>
            <article className="content-center mb-8 ga gap-y-8 p-x-4 projects-grid">
                <ProjectCard title="Pokedex" description="Proyecto que consume la famosa PokeAPI y permite realizar búsquedas fáciles y controladas de la información de los Pokémon. Cuenta con scroll infinito, uso de Local Storage y de la Context API de React." tags={ProyectoPokedex} previewLink="https://pokeapi-uliversion.netlify.app/" codeLink="https://github.com/Uli3000/Pokedex-UliVersion" videoName="PokedexUVersion" />
                <ProjectCard title="RentaGuna" description="RentaGuna es un proyecto de rentas de propiedades, que permite publicar, crear y editar a tu gusto, con sistema de login, rutas protegidas y una autenticación segura con JWT." tags={ProyectoRentaGuna} previewLink="https://rentaguna-production.up.railway.app/auth/login" codeLink="https://github.com/Uli3000/RentaGuna" videoName="RentaGuna" />
                <ProjectCard title="JavaScript Quiz" description="Quiz básico de JavaScript que aprovecha el uso de estados globales de manera sencilla con Zustand, incluye persistencia de datos en el Local Storage y componentes visuales con Material UI" tags={ProyectoJavaScriptQuiz} previewLink="https://myjavascript-quiz.netlify.app" codeLink="https://github.com/Uli3000/JasvascriptQuiz" videoName="JavaScriptQuiz" />
                <ProjectCard title="Atrapa el color" description="Minijuego de atrapar el color con un botón, donde cada vez que se reinicia el juego, se restablecen los estados, basado en el juego 'Bop It! Smash', utilizando los hooks de React y sus renderizados." tags={ProyectoAtrapaElColor} previewLink="https://atrapa-el-color.netlify.app/" codeLink="https://github.com/Uli3000/Atrapa-el-color-ReactMiniGame" videoName="AtrapeElColor" />
                <ProjectCard title="Traductor Con CohereAI" description="Simulador del traductor de Google utilizando inteligencia artificial, con el modelo de Cohere, tipado en TypeScript y con uso de debounce." tags={ProyectoTraductor} previewLink="https://google-translator-simulator.netlify.app/" codeLink="https://github.com/Uli3000/GoogleTranslatorSimulator" videoName="GoogleTranslator" />
                <ProjectCard title="Reticulas App" description="Proyecto escolar utilizando tecnologías básicas para manipular una base de datos en DB2, simulando ser un sistema escolar con carga de materias, planes de estudio y creación de retículas personalizadas." tags={ProyectoReticulasApp} previewLink="https://youtu.be/lfZa4flGt8Y" codeLink="https://github.com/Uli3000/AppReticulaTEC" videoName="ReticulasApp" />
            </article>
        </section>
    )
}

export default Projects