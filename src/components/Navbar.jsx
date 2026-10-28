import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const SECTIONS = ['about', 'experience', 'skills', 'projects', 'education', 'contact']
const NAV_LINKS = SECTIONS.map((id) => ({
  id,
  label: id.charAt(0).toUpperCase() + id.slice(1),
}))

// Navbar: dark navy bar matching reference design.
// Active link gets an underline indicator; Download CV is a subtle outline pill.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(SECTIONS)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const resumeHref = `${import.meta.env.BASE_URL}${portfolio.meta.resume}`

  return (
    <header className="sticky top-0 z-50 bg-navy-950 shadow-md">
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Name / logo */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          {portfolio.meta.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${activeId === link.id
                    ? 'text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-amber-400'
                    : 'text-navy-200 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeHref}
            download
            className="hidden items-center gap-1.5 rounded-full border border-navy-300/40 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:border-amber-400 hover:text-amber-400 md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white md:hidden hover:bg-navy-800"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-navy-800 bg-navy-950 md:hidden">
          <ul className="mx-auto max-w-content px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                    activeId === link.id
                      ? 'text-amber-400'
                      : 'text-navy-200 hover:bg-navy-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={resumeHref}
                download
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-navy-300/40 px-4 py-3 text-base font-semibold text-white hover:border-amber-400 hover:text-amber-400"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
