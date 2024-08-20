
const AboutMe = () => {
    return (
        <section id="Acerca-de-mi" className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row max-w-[1320px] mx-4 xl:mx-auto mt-8 z-40">
            <article
                className="[&>p]:mb-4 [&>p>strong]:text-orange-500 dark:[&>p>strong]:text-orange-200 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
            >
                <h2 className="my-4 font-[Onest] text-4xl font-semibold text-gray-100">Acerca de mi</h2>
                <p>
                    Me llamo Ulises Castro, tengo 22 años y soy de Torreón, Coahuila. Estoy por terminar mis estudios como <strong><em className="italic">Ingeniero en Sistemas Computacionales</em></strong>. En los últimos tiempos, he estado interesado y me he especializado específicamente como <strong><em className="italic">Desarrollador Web</em> con el objetivo de brindar mejores experiencias a los usuarios</strong>.
                </p>

                <p>
                    Participé en distintos concursos internos dentro de mi universidad, siendo el más importante el <strong>ICPC</strong>, en el que aprendí a trabajar en equipo de manera adecuada y con esto, <strong>resolver problemas complicados en conjunto</strong>.
                </p>

                <p>
                    Siempre busco constantemente ampliar mi area de conocimiento con nuevas tecnologias para asi poder adaptar mis proyectos a distintas circunstancias de manera mas efectiva. <strong>Estoy dispuesto a adaptarme a lo que mi entorno necesite</strong> con una actitud postiva y una mente abierta.
                </p>
            </article>

            <img width="200" height="200" src="/UlisesCastro.jpg" alt='Foto Ulises(yo)' className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style={{ objectPosition: '50% 50%' }} />

        </section>
    )
}

export default AboutMe