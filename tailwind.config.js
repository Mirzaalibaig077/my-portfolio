/** @type {import('tailwindcss').Config} */
// Design tokens matching the reference design:
// - navy: dark blue used for navbar bg, headings, accents
// - page:  soft blue-grey page background
// - accent: golden/amber CTA button (the "Hire on Upwork" pill colour from reference)
// Change accent.DEFAULT / accent.600 / accent.700 to recolor all CTAs.
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Page background — soft blue-grey (matches reference #eef2f7)
        page: {
          DEFAULT: '#eef2f7',
          dark: '#0f1623',
        },
        // Navy — navbar, headings, strong text
        navy: {
          50:  '#eef1f7',
          100: '#d5dcec',
          200: '#aab8d9',
          300: '#7f94c6',
          400: '#5470b3',
          500: '#2a4ca0',
          600: '#1e3a8a', // primary navy
          700: '#162d6e',
          800: '#0e2054',
          900: '#071239',
          950: '#040b22',
        },
        // Accent — golden/amber pill button (matches reference CTA)
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          fg: '#ffffff',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        // Serif display font for the hero name & section titles (Playfair Display,
        // loaded in index.html) with a graceful system-serif fallback.
        display: ['"Playfair Display"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(14,32,84,0.07)',
        'card-hover': '0 6px 28px 0 rgba(14,32,84,0.13)',
      },
    },
  },
  plugins: [],
}
