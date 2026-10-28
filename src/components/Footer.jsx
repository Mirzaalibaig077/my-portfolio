import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

// Footer: dark navy background (matching the navbar), copyright + social icons.
export default function Footer() {
  const year = new Date().getFullYear()
  const { meta } = portfolio

  const iconLink =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-300 transition-colors hover:border-amber-400 hover:text-amber-400'

  return (
    <footer className="bg-navy-950">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-navy-400">
          © {year} {meta.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
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
          <a
            href={`mailto:${meta.email}`}
            aria-label="Send email"
            className={iconLink}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
