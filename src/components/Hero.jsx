import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

// Hero: floating card on the page. Two-column layout — left: eyebrow +
// huge serif name + title + accent rule + tagline + CTAs + socials;
// right: circular profile photo with a soft accent glow behind it.
export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [imgError, setImgError] = useState(false)
  const { meta } = portfolio

  const initials = meta.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  const reveal = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } }

  const photoHref = `${import.meta.env.BASE_URL}${meta.photo}`
  const iconLink =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-colors hover:border-amber-400 hover:text-amber-500 dark:border-navy-700 dark:text-navy-300 dark:hover:text-amber-400'

  return (
    <section id="top" className="mx-auto max-w-content px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card dark:border-navy-800 dark:bg-navy-900">
        <div className="flex flex-col items-center gap-10 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">

          {/* ── Left column ── */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.p
              {...reveal}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400"
            >
              Hello I Am
            </motion.p>

            <motion.h1
              {...reveal}
              className="mt-3 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              {meta.name}
            </motion.h1>

            {/* Dot-separated title */}
            <motion.div
              {...reveal}
              className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-navy-600 dark:text-navy-300 md:justify-start"
            >
              {meta.title.split(' · ').map((part, i, arr) => (
                <span key={part} className="inline-flex items-center gap-2">
                  {part}
                  {i < arr.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-navy-300 dark:bg-navy-500" aria-hidden="true" />
                  )}
                </span>
              ))}
            </motion.div>

            {/* Accent rule */}
            <motion.div
              {...reveal}
              className="mt-5 h-1 w-12 rounded-full bg-amber-500"
              aria-hidden="true"
            />

            <motion.p
              {...reveal}
              className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 dark:text-navy-300"
            >
              {meta.tagline}
            </motion.p>

            {/* CTA row */}
            <motion.div {...reveal} className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600"
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:border-navy-400 hover:text-navy-900 dark:border-navy-600 dark:text-navy-200 dark:hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social icons + location */}
            <motion.div {...reveal} className="mt-6 flex items-center gap-3">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in new tab)"
                className={iconLink}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in new tab)"
                className={iconLink}
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`mailto:${meta.email}`} aria-label="Send email" className={iconLink}>
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="ml-1 inline-flex items-center gap-1 text-xs text-slate-400 dark:text-navy-400">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {meta.location}
              </span>
            </motion.div>
          </div>

          {/* ── Right column: photo with soft accent glow ── */}
          <motion.div {...reveal} className="relative flex-shrink-0">
            <div
              className="absolute inset-0 -m-3 rounded-full bg-amber-400/10 blur-xl"
              aria-hidden="true"
            />
            <div className="relative h-52 w-52 overflow-hidden rounded-full border border-navy-100 bg-white shadow-card dark:border-navy-800 dark:bg-navy-900 md:h-64 md:w-64">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center bg-navy-600 font-display text-4xl font-bold text-white">
                  {initials}
                </div>
              ) : (
                <img
                  src={photoHref}
                  alt={`${meta.name} profile photo`}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
