// SectionHeading: centered eyebrow + large serif display title + a short
// amber accent underline. Every content section uses this for a consistent,
// formal CV/profile look. Pass align="left" to left-align (rarely used).
export default function SectionHeading({ id, eyebrow, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center'
  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 dark:text-navy-400">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-2 font-display text-3xl font-bold text-navy-900 dark:text-white sm:text-4xl"
      >
        {title}
      </h2>
      {/* short accent underline */}
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-amber-500 ${isCenter ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`mt-4 text-slate-500 dark:text-navy-300 ${
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
