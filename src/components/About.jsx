import { motion, useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

// About: left stats/meta card + right summary block.
// All values come from portfolio.js (no hardcoded personal text).
export default function About() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay },
        }

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading id="about-heading" eyebrow="Who I Am" title="About Me" />

      <div className="grid gap-6 md:grid-cols-3">
        {/* Stats / meta card */}
        <motion.div
          {...reveal(0)}
          className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card dark:border-navy-800 dark:bg-navy-900 sm:p-8"
        >
          <dl className="divide-y divide-navy-100 dark:divide-navy-800">
            <div className="flex items-start justify-between py-4 first:pt-0">
              <dt className="text-xs font-medium uppercase tracking-wide text-navy-400">Current Role</dt>
              <dd className="ml-4 text-right text-sm font-semibold text-navy-800 dark:text-navy-100">
                {portfolio.experience[0]?.role}
              </dd>
            </div>
            <div className="flex items-start justify-between py-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-navy-400">Company</dt>
              <dd className="ml-4 text-right text-sm font-semibold text-navy-800 dark:text-navy-100">
                {portfolio.experience[0]?.company}
              </dd>
            </div>
            <div className="flex items-start justify-between py-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-navy-400">Location</dt>
              <dd className="ml-4 text-right text-sm font-semibold text-navy-800 dark:text-navy-100">
                {portfolio.meta.location}
              </dd>
            </div>
            <div className="pt-4">
              <dt className="mb-3 text-xs font-medium uppercase tracking-wide text-navy-400">Interests</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {portfolio.about.interests.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 dark:bg-navy-800 dark:text-navy-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* Summary block */}
        <motion.div
          {...reveal(0.1)}
          className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card dark:border-navy-800 dark:bg-navy-900 sm:p-8 md:col-span-2"
        >
          <p className="text-base leading-relaxed text-slate-600 dark:text-navy-300 md:text-lg">
            {portfolio.about.summary}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
