import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

// Contact: clean white card on the blue-grey background.
// Phone shown only when meta.showPhone is true.
export default function Contact() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
      }

  const { meta } = portfolio

  const row =
    'group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-navy-50 dark:hover:bg-navy-800/50'
  const iconWrap =
    'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-white text-navy-600 dark:border-navy-700 dark:bg-navy-800 dark:text-navy-300'
  const labelCls =
    'block text-xs font-medium uppercase tracking-wide text-navy-400 dark:text-navy-500'
  const valueCls =
    'block text-sm font-semibold text-navy-800 transition-colors group-hover:text-amber-600 dark:text-navy-100 dark:group-hover:text-amber-400'

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading
        id="contact-heading"
        eyebrow="Say Hello"
        title="Get In Touch"
        subtitle="Have a role or project in mind? I'd love to hear from you."
      />

      <motion.div
        {...reveal}
        className="mx-auto max-w-2xl rounded-2xl border border-navy-100 bg-white p-8 shadow-card dark:border-navy-800 dark:bg-navy-900"
      >
        <ul className="space-y-1">
          <li>
            <a href={`mailto:${meta.email}`} className={row}>
              <span className={iconWrap}><Mail className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className={labelCls}>Email</span>
                <span className={valueCls}>{meta.email}</span>
              </span>
            </a>
          </li>

          {meta.showPhone && (
            <li>
              <a href={`tel:${meta.phone.replace(/\s+/g, '')}`} className={row}>
                <span className={iconWrap}><Phone className="h-5 w-5" aria-hidden="true" /></span>
                <span>
                  <span className={labelCls}>Phone</span>
                  <span className={valueCls}>{meta.phone}</span>
                </span>
              </a>
            </li>
          )}

          <li>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className={row}>
              <span className={iconWrap}><Linkedin className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className={labelCls}>LinkedIn</span>
                <span className={valueCls}>linkedin.com/in/muhammad-ali-baig</span>
              </span>
            </a>
          </li>

          <li>
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className={row}>
              <span className={iconWrap}><Github className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className={labelCls}>GitHub</span>
                <span className={valueCls}>github.com/Mirzaalibaig077</span>
              </span>
            </a>
          </li>
        </ul>

        <div className="mt-6 border-t border-navy-100 pt-6 dark:border-navy-800">
          <a
            href={`mailto:${meta.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send me an email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
