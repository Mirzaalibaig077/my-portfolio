import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

// Education: single white card, centered, consistent with reference card style.
export default function Education() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
      }

  const edu = portfolio.education

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading id="education-heading" eyebrow="Background" title="Education" />

      <motion.div
        {...reveal}
        className="mx-auto max-w-2xl rounded-2xl border border-navy-100 bg-white p-8 shadow-card dark:border-navy-800 dark:bg-navy-900"
      >
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-navy-50 dark:border-navy-700 dark:bg-navy-800">
            <GraduationCap className="h-7 w-7 text-navy-600 dark:text-navy-300" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="mt-1 font-semibold text-amber-600 dark:text-amber-400">
              {edu.institution}
            </p>
            <p className="mt-2 text-sm text-navy-500 dark:text-navy-400">{edu.dates}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-navy-500 dark:text-navy-400">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {edu.location}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
