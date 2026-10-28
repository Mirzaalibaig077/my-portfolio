import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

// Projects: white cards on the blue-grey background.
// GitHub/Live buttons hidden when the link is empty.
export default function Projects() {
  const reduceMotion = useReducedMotion()
  const reveal = (i = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.07 },
        }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow="What I've Built"
        title="Featured Projects"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project, i) => {
          const imgHref = `${import.meta.env.BASE_URL}${project.image}`
          return (
            <motion.article
              key={project.title}
              {...reveal(i)}
              className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900"
            >
              {/* Image / placeholder */}
              {/* TODO: replace project-*.svg placeholders with real screenshots */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-navy-50 dark:bg-navy-800">
                <img
                  src={imgHref}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-navy-300">
                  {project.description}
                </p>

                <p className="mt-3 text-sm font-medium text-amber-600 dark:text-amber-400">
                  {project.impact}
                </p>

                {/* Tech chips */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-700 dark:bg-navy-800 dark:text-navy-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Link buttons — hidden when empty */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="mt-5 flex items-center gap-4 border-t border-navy-50 pt-4 dark:border-navy-800">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors hover:text-amber-600 dark:text-navy-300 dark:hover:text-amber-400"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors hover:text-amber-600 dark:text-navy-300 dark:hover:text-amber-400"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
