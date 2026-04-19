import experience from "../utils/experience"
import ExperienceItem from "./ExperienceItem"

export default function Experience() {
  return (
    <section id="Experiencia" className="max-w-[1320px] z-40 sm:mx-auto w-full mt-2">
        <h2 className="mt-20 font-[Onest] text-4xl font-semibold text-gray-100 mb-10 text-center">
            Experiencia
        </h2>
        <ol className="relative mt-16">
            {experience.map((exp, i) => (
            <li
                key={`${exp.company}-${i}`}
            >
                <ExperienceItem {...exp} />
            </li>
            ))}
        </ol>
    </section>
  )
}