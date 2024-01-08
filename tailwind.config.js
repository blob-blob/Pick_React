/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '0.75rem',
    },

    screens: {
      txsm: '280px',
      xsm: '321px',
      dsm: '360px',
      sm: '375px',
      zmd: '412px',
      zlg: '728px',
      xlg: '984px',
      '2xl': '1240px',
      '3xl': '1496px',
    },

    /** padding, margin, width, height, maxHeight, gap, inset, space, and translate */
    spacing: {
      0: 0,
      '0-25': '0.125rem',
      '0-5': '0.25rem',
      1: '0.5rem',
      '1-5': '0.75rem',
      2: '1rem',
      '2-5': '1.25rem',
      3: '1.5rem',
      '3-5': '1.75rem',
      4: '2rem',
      '4-5': '2.25rem',
      5: '2.5rem',
      '5-5': '2.75rem',
      6: '3rem',
      '6-5': '3.25rem',
      7: '3.5rem',
      '7-5': '3.75rem',
      8: '4rem',
      '8-5': '4.25rem',
      9: '4.5rem',
      '9-5': '4.75rem',
      10: '5rem',
      11: '5.5rem',
      12: '6rem',
      13: '6.5rem',
      14: '7rem',
      15: '7.5rem',
      16: '8rem',
      17: '8.5rem',
      18: '9rem',
      19: '9.5rem',
      20: '10rem',
      21: '11rem',
      22: '12rem',
      23: '13rem',
      24: '14rem',
      25: '15rem',
    },

    extend: {
      fontFamily: {
        sans: ['Spoqa Han Sans Neo', 'sans-serif'],
        skkomi: ['KNPSKkomi'],
        gmarket: ['GmarketSans'],
      },

      /** Brand Colors prefix(text-*, bg-*) */
      colors: {
        white: { DEFAULT: 'rgba(255, 255, 255, 1)' },
        blue: {
          '01': 'rgba(230, 240, 254, 1)',
          '02': 'rgba(205, 225, 253, 1)',
          '03': 'rgba(180, 210, 252, 1)',
          '04': 'rgba(130, 180, 251, 1)',
          '05': 'rgba(105, 165, 250, 1)',
          '06': 'rgba(80, 150, 249, 1)',
          '07': 'rgba(30, 120, 247, 1)',
          '08': 'rgba(6, 105, 247, 1)',
          '09': 'rgba(4, 84, 197, 1)',
          10: 'rgba(3, 63, 148, 1)',
          11: 'rgba(2, 42, 98, 1)',
          12: 'rgba(1, 21, 49, 1)',
        },
        yellow: {
          '01': 'rgba(254, 251, 241, 1)',
          '02': 'rgba(253, 246, 224, 1)',
          '03': 'rgba(252, 236, 187, 1)',
          '04': 'rgba(255, 228, 144, 1)',
          '05': 'rgba(255, 219, 115, 1)',
          '06': 'rgba(255, 209, 87, 1)',
          '07': 'rgba(255, 199, 44, 1)',
          '08': 'rgba(242, 185, 28, 1)',
          '09': 'rgba(212, 164, 55, 1)',
          10: 'rgba(255, 199, 44, 1)',
        },
        gray: {
          '01': 'rgba(248, 248, 250, 1)',
          '02': 'rgba(242, 242, 242, 1)',
          '02-5': 'rgba(229, 229, 229, 1)',
          '03': 'rgba(221, 221, 221, 1)',
          '04': 'rgba(196, 196, 196, 1)',
          '05': 'rgba(178, 178, 178, 1)',
          '06': 'rgba(142, 142, 142, 1)',
          '07': 'rgba(122, 123, 122, 1)',
          '08': 'rgba(89, 89, 89, 1)',
          '09': 'rgba(71, 71, 71, 1)',
          10: 'rgba(53, 53, 53, 1)',
          11: 'rgba(37, 40, 42, 1)',
          12: 'rgba(0, 0, 0, 1)',
        },
        black: {
          DEFAULT: 'rgba(9, 9, 9, 1)',
        },
        green: {
          '01': 'rgba(232, 248, 233, 1)',
          '04': 'rgba(178, 235, 184, 1)',
          '07': 'rgba(0, 200, 0, 1)',
          '09': 'rgba(15, 113, 25, 1)',
        },
        danger: {
          bright: 'rgba(255, 239, 241, 1)',
          light: 'rgba(255, 220, 224, 1)',
          DEFAULT: 'rgba(237, 28, 36, 1)',
          dark: 'rgba(238, 59, 79, 1)',
        },
        primary: {
          light: 'rgba(230, 240, 254, 1)',
          DEFAULT: 'rgba(6, 105, 247, 1)',
        },
        accent: {
          light: 'rgba(255, 219, 177, 1)',
          DEFAULT: 'rgba(255, 137, 0, 1)',
          dark: 'rgba(200, 109, 52, 1)',
        },
        basic: 'rgba(51, 51, 51, 1)',
      },
      fontSize: {
        fs10: ['0.625rem', '0.75rem'],
        fs11: ['0.688rem', '0.813rem'],
        fs12: ['0.75rem', '0.875rem'],
        fs13: ['0.813rem', '0.938rem'],
        fs14: ['0.875rem', '1rem'],
        fs15: ['0.938rem', '1.063rem'],
        fs16: ['1rem', '1.125rem'],
        fs18: ['1.125rem', '1.25rem'],
        fs20: ['1.25rem', '1.375rem'],
        fs22: ['1.375rem', '1.5rem'],
        fs24: ['1.5rem', '1.625rem'],
        fs26: ['1.625rem', '1.875rem'],
        fs28: ['1.75rem', '2rem'],
        fs30: ['1.875rem', '2rem'],
        fs32: ['2rem', '2.25rem'],
        fs36: ['2.25rem', '2.5rem'],
        fs40: ['2.5rem', '3.25rem'],
        fs48: ['3rem', '3.275rem'],
        fs60: ['3.75rem', '5rem'],
        fs72: ['4.5rem', 1],

        h1: ['2rem', '2.5rem'],
        h2: ['1.75rem', '2.25rem'],
        h3: ['1.5rem', '1.875rem'],

        'title-1': ['1.25rem', '1.625rem'],
        'title-2': ['1.125rem', '1.5rem'],
        'title-3': ['1rem', '1.25rem'],
        'title-4': ['0.875rem', '1.125rem'],
        'title-5': ['0.813rem', '1.125rem'],

        'paragraph-1': ['1.125rem', '1.625rem'],
        'paragraph-2': ['1rem', '1.4rem'],
        'paragraph-3': ['0.875rem', '1.25rem'],
        'paragraph-4': ['0.813rem', '1.125rem'],
        'paragraph-5': ['0.688rem', '1rem'],
        'paragraph-6': ['0.625rem', '0.875rem'],

        'button-1': ['1.25rem', '1.25rem'],
        'button-2': ['1.125rem', '1.125rem'],
        'button-3': ['1rem', '1rem'],
        'button-4': ['0.813rem', '0.813rem'],
        'button-5': ['0.75rem', '0.75rem'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
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
            transform: 'translateY(-30px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
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
            transform: 'translateY(30px)',
          },
        },

        'fade-in-up-toast': {
          '0%': {
            transform: 'translateY(30px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'fade-out-toast': {
          from: {
            transform: 'translateY(0px)',
          },
          to: {
            transform: 'translateY(150%)',
          },
        },

        'fade-in-down-toast': {
          '0%': {
            transform: 'translateY(-60px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'fade-out-down-toast': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(-150%)',
          },
        },
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out',
        'fade-out-down': 'fade-out-down 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.2s ease-out',
        'fade-out-up': 'fade-out-up 0.2s ease-out',
        'fade-toast': 'fade-in-up-toast 0.5s, fade-out-toast 0.5s 1.6s',
        'fade-reverse-toast': 'fade-in-down-toast 0.5s, fade-out-down-toast 0.5s 2.6s',
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require('tw-elements/dist/plugin'), require('tailwind-scrollbar-hide')],
};
