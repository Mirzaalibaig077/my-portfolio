import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2, Server, Layout, Brain, Database, Cloud, Lightbulb
} from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

// Map each skill category to a lucide icon.
const CATEGORY_ICONS = {
  'Languages':      Code2,
  'Backend & APIs': Server,
  'Frontend':       Layout,
  'AI & ML':        Brain,
  'Databases':      Database,
  'Cloud & DevOps': Cloud,
  'Concepts':       Lightbulb,
}

// Skills: icon-top centered white cards in a 3-col grid,
// matching the "My Services" card style from the reference.
// No bars, no percentages — chips only.
export default function Skills() {
  const reduceMotion = useReducedMotion()
  const reveal = (i = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.06 },
        }

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading
        id="skills-heading"
        eyebrow="What I Know"
        title="Skills & Technologies"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group, i) => {
          const Icon = CATEGORY_ICONS[group.category] ?? Lightbulb
          return (
            <motion.div
              key={group.category}
              {...reveal(i)}
              className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-7 text-center shadow-card transition-shadow hover:shadow-card-hover dark:border-navy-800 dark:bg-navy-900"
            >
              {/* Icon badge */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-navy-100 bg-navy-50 dark:border-navy-700 dark:bg-navy-800">
                <Icon className="h-6 w-6 text-navy-600 dark:text-navy-300" aria-hidden="true" />
              </div>

              <h3 className="text-base font-bold text-navy-900 dark:text-white">
                {group.category}
              </h3>

              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-navy-50 px-3 py-0.5 text-xs font-medium text-navy-700 dark:bg-navy-800 dark:text-navy-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
