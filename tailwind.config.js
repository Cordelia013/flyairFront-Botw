// tailwind.config.js
const grid = require('./config/grid');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      spacing: {
        // Ajouter les marges de la configuration de grille
        'mobile-margin': `${grid.mobile.margin}px`,
        'tablet-margin': `${grid.tablet.margin}px`,
        'desktop-margin': `${grid.desktop.margin}px`,
      },
      maxWidth: {
        // Ajouter les largeurs de mockup
        'mobile': `${grid.mobile.mockupWidth}px`,
        'tablet': `${grid.tablet.mockupWidth}px`,
        'desktop': `${grid.desktop.mockupWidth}px`,
      },
      gap: {
        // Ajouter les gouttières
        'mobile': `${grid.mobile.gutter}px`,
        'tablet': `${grid.tablet.gutter}px`,
        'desktop': `${grid.desktop.gutter}px`,
      },
    },
  },
  plugins: [],
}