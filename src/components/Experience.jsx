import { motion, useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

// Experience: vertical timeline. Rail on the left, card on the right.
// Cards are white-on-page-bg matching the reference card style.
export default function Experience() {
  const reduceMotion = useReducedMotion()
  const reveal = (i = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.08 },
        }

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading
        id="experience-heading"
        eyebrow="My Journey"
        title="Work Experience"
        align="left"
      />

      <ol className="relative ml-3 border-l-2 border-navy-100 dark:border-navy-800">
        {portfolio.experience.map((job, idx) => (
          <li key={`${job.company}-${job.dates}`} className="mb-8 ml-7 last:mb-0">
            {/* Timeline dot */}
            <span
              className="absolute -left-[0.525rem] mt-2 h-4 w-4 rounded-full border-2 border-white bg-amber-500 dark:border-page-dark"
              aria-hidden="true"
            />

            <motion.div
              {...reveal(idx)}
              className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card dark:border-navy-800 dark:bg-navy-900"
            >
              {/* Header row */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                  {job.role}
                </h3>
                <span className="inline-block rounded-full bg-navy-50 px-3 py-0.5 text-xs font-medium text-navy-500 dark:bg-navy-800 dark:text-navy-300">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                {job.company} · {job.location}
              </p>

              {/* Projects */}
              <div className="mt-5 space-y-4">
                {job.projects.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl bg-navy-50/60 p-4 dark:bg-navy-800/40"
                  >
                    <p className="text-sm font-semibold text-navy-800 dark:text-navy-200">
                      {p.name}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {p.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-navy-300"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  )
}
