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
      '3xl': {'min': '1663px'},
      
      '2xl': {'max': '1535px'},

      'xl': {'max': '1280px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },
    
    extend: {
      display: ["group-hover"],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cover-bg': "url('/foreground.svg')",
        'portfolio-cover-bg': "url('/Portfolio-cover-gradient.png')",
        'cover-glow': "url('/glow.svg')",
        'cover-noise': "url('/noise.svg')",
        'gradient-darkest': "linear-gradient(270deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.00) 50%, rgba(18, 18, 18, 1) 100%)",
        'gradient-white': "linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 1) 100%)",
        'yearXp': "linear-gradient(165deg, rgba(0,15,255,1) 45%, rgba(0, 0, 0, 1))",
      },
      fontSize: {
        title: 'max(1.5rem,min(3.5vw,2.25rem))',
      },

      'animation': {
            'gradient-x':'gradient-x 5s ease infinite',
            'gradient-y':'gradient-y 5s ease infinite',
            'gradient-xy':'gradient-xy 5s ease infinite',
        },
        'keyframes': {
            'gradient-y': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'center top'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'center center'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            }
        },

      colors: {
        'darkest': "rgb(18, 18, 18)",
        'dark-grey': 'rgb(26, 26, 26)',
        'light-grey': 'rgb(169, 169, 169)',
        'primary': 'rgb(0, 15, 255)',
        'secondary': 'rgb(0, 122, 255)',
        'deep-purple': 'rgb(134, 23, 255)',
        "blood-red": 'rgb(255, 0, 0)',
      }
    },
  },
  plugins: [],
}
export default config
