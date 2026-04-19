import type { ExperienceEntry } from "../utils/experience"

export default function ExperienceItem({
  title, company, description, date, current = false,
}: ExperienceEntry) {
  return (
    <div className="relative mx-14 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-12 md:col-span-2">
          <div className="flex items-center">
            <span className="absolute -left-[42px] flex size-[14px] items-center justify-center" aria-hidden="true">
              {current && (
                <span className="absolute inline-flex rounded-full animate-ping motion-reduce:animate-none size-full bg-orange-400/40" />
              )}
              <span className={`relative inline-flex size-[10px] rounded-full bg-purple-400 ${current ? "shadow-[0_0_8px_2px_rgba(251,191,36,0.45)]" : ""}`} />
            </span>
            <h3 className="text-xl font-bold text-violet-400">{title}</h3>
          </div>
          <h4 className="text-xl font-semibold text-gray-600 dark:text-white">{company}</h4>
          <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80 font-[Onest]">{date}</time>
      </div>

      <div className="relative text-gray-600 dark:text-gray-300 md:col-span-3 font-[Onest] text-pretty">
        <p>{description}</p>
      </div>
    </div>
  )
}