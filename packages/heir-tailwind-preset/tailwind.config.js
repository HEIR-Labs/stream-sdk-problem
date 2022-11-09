/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  theme: {
    extend: {
      screens: { xl: '1440px' },
      colors: {
        blue: '#001DFF',
        orange: '#FF7246',
        'blue-40': '#282BD7',
        'blue-40-22': '#282BD722',
        'blue-40-52': '#282BD752',
        'blue-30': '#596CFF',
        'blue-45': '#282BD7',
        'dark-blue': '#596CFF',
        'dark-blue-transparent': '#596CFF66',
        midnight: '#01203F',
        nav: '#1C2E44',
        modal: 'rgba(255,255,255,0.3)',
        'gray-100': '#1B1E21',
        'gray-90': '#1C1C1C',
        'gray-80': '#2C2C2C',
        'gray-70': '#5B5B5B',
        'gray-60': '#aeaeae',
        'gray-50': '#cdcbcb',
        'gray-30': '#ecebeb',
        'gray-20': '#dcdcdc',
        'gray-10': '#EFEFEF',
        'yellow-550': '#AB722F',
        red: '#FF4040',
        purple: '#596cff',
        'black-transparent': '#00000033',
        'green-200': '#8DC9AC',
        'green-100': '#53DE7A',
      },
      fontSize: {
        '2xs': '.625rem',
      },
      fontFamily: {
        roboto: ['Roboto-Regular', 'sans-serif'],
        neubit: 'PPNeueBit',
        'neubit-bold': 'PPNeueBitBold',
      },
      maxHeight: {
        'to-footer': 'calc(100vh - 22.75rem)',
      },
      backgroundImage: {
        'gradient-popup':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)), radial-gradient(213.6% 98.25% at 88.21% 100%, #5DAB94 0%, #596CFF 100%)',
        'ask-popup-portrait': 'url(/images/ask-popup-bg-portrait.png)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },
      skeletonScreen: {
        DEFAULT: {
          baseColor: '#2C2C2C',
          movingColor:
            'linear-gradient(to right, transparent 0%, #5B5B5B 50%, transparent 100%)',
          duration: '1s',
          timing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@gradin/tailwindcss-skeleton-screen'),
  ],
};
