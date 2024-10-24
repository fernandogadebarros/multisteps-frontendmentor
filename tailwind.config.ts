import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        purple: '#483EFF',
        'light-purple': '#F8F9FF',
        blue: {
          marine: '#02295A',
          'light-marine': '#164A8A',
          purplish: '#473DFF',
          pastel: '#ADBEFF',
          light: '#BFE2FD',
        },
        red: {
          straw: '#ED3548',
        },
        neutral: {
          dark: '#9699AA',
          cool: '#9699AB',
          light: '#D6D9E6',
          magnolia: '#F0F6FF',
          alabaster: '#FAFBFF',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)'],
        'ubuntu-bold': ['var(--font-ubuntu-bold)'],
        'ubuntu-medium': ['var(--font-ubuntu-medium)'],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
export default config
