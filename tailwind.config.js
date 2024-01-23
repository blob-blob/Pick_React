/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '0.75rem',
    },
    extend: {
      /** Brand Colors prefix(text-*, bg-*) */
      colors: {
        white: { DEFAULT: '#ffffff' },
        purple: {
          DEFAULT: '#9747FF',
        },
        blue: {
          '01': '#e6f0fe',
          '02': '#cde1fd',
          '03': '#b4d2fc',
          '04': '#82b4fb',
          '05': '#69a5fa',
          '06': '#5096f9',
          '07': '#1e78f7',
          '08': '#0669f7',
          '09': '#0454c5',
          10: '#033f94',
          11: '#022a62',
          12: '#011531',
        },
        yellow: {
          '01': '#fefbf1',
          '02': '#fdf6e0',
          '03': '#FCECBB',
          '04': '#ffe490',
          '05': '#ffdb73',
          '06': '#ffd157',
          '07': '#ffc72c',
          '08': '#f2b91c',
          '09': '#d4a437',
        },
        gray: {
          '01': '#f8f8fa',
          '02': '#f2f2f2',
          '03': '#dddddd',
          '04': '#c4c4c4',
          '05': '#b2b2b2',
          '06': '#8e8e8e',
          '07': '#7a7b7a',
          '08': '#595959',
          '09': '#474747',
          10: '#353535',
          11: '#25282A',
          12: '#000000',
        },
        'cool-gray': {
          '01': '#F5F7FB',
          '04': '#D6DCE5',
          10: '#444F5D',
          11: '#233040',
        },
        black: {
          DEFAULT: '#090909',
        },
        transparent: {
          hover: 'rgba(0, 0, 0, 0.08)',
          dim: 'rgba(0, 0, 0, 0.3)',
          'top-layer': 'rgba(0, 0, 0, 0.8)',
        },
        green: {
          '01': '#FEFBF1',
          '04': '#FFE490',
          '06': '#66cc33',
          '07': '00C800',
          '09': '#D4A437',
        },
        danger: {
          'bg-red': '#FFEFF1',
          light: '#FFDCE0',
          DEFAULT: '#ED1C24',
          dark: '#EE3B4F',
        },
        primary: {
          light: '#e6f0fe',
          DEFAULT: '#0669f7',
        },
      },

      fontSize: {
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
      keyframes: {},
      animation: {},
    },
  },
};
