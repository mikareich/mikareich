import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'raisin-black': {
        // https://maketintsandshades.com/#1B1725
        '100': '#d1d1d3',
        '200': '#a4a2a8',
        '300': '#76747c',
        '400': '#494551',
        '500': '#1b1725',
        '600': '#16121e',
        '700': '#100e16',
        '800': '#0b090f',
        '900': '#050507',
      },
      'baby-powder': '#FCFFFD',
      'primary-color': '#7C90DB',
      'background-color': '#050507',
      'background-accent-color': '#1b1725',
      'heading-color': '#FCFFFD',
      'body-color': '#d1d1d3',
      transparent: 'transparent',
    },
    fontFamily: {
      body: ['var(--font-space-mono)'],
      heading: ['var(--font-fira-mono)'],
    },
    fontSize: {
      '5xl': '61.04px', // title
      '4xl': '48.83px', // h1
      '3xl': '39.06px', // h2
      '2xl': '31.25px', // h3
      xl: '25px', // h4
      lg: '20px', // h5, lg
      base: '18px', // base
      sm: '16px', // text-small
      xs: '12.8px', // text-small
    },
    screens: {
      xs: '576px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
export default config
