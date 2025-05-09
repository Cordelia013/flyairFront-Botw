// tailwind.config.js
const { gridConfig } = require('./lib/config/grid');

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
      screens: {
        'sm': `${gridConfig.mobile.mockupWidth}px`,
        'md': `${gridConfig.tablet.mockupWidth}px`,
        'lg': `${gridConfig.desktop.mockupWidth}px`,
      },
      spacing: {
        'sm-gutter': `${gridConfig.mobile.gutter}px`,
        'md-gutter': `${gridConfig.tablet.gutter}px`,
        'lg-gutter': `${gridConfig.desktop.gutter}px`,
        'sm-margin': `${gridConfig.mobile.margin}px`,
        'md-margin': `${gridConfig.tablet.margin}px`,
        'lg-margin': `${gridConfig.desktop.margin}px`,
      },
    },
  },
  plugins: [],
}