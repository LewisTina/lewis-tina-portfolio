import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cover-bg': "url('/foreground.svg')",
        'cover-glow': "url('/glow.svg')",
        'cover-noise': "url('/noise.svg')",
        'gradient-darkest': "linear-gradient(270deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.00) 50%, rgba(18, 18, 18, 1) 100%)",
        'gradient-white': "linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 1) 100%)",
      },

      colors: {
        'darkest': "rgb(18, 18, 18)",
        'dark-grey': 'rgb(26, 26, 26)',
        'light-grey': 'rgb(169, 169, 169)',
        'primary': 'rgb(0, 15, 255)',
        'secondary': 'rgb(0, 122, 255)',
        'deep-purple': 'rgb(134, 23, 255)',
      }
    },
  },
  plugins: [],
}
export default config
