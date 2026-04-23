import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '1280': '1280px',
      '1024': '1024px',
      '768': '768px',
      '600': '600px',
      '390': '390px',
      '400': '400px',
      '410': '410px',
      '430': '430px',
      '1440': '1440px',
    },
    extend: {
      fontFamily: {
        primary: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          magenta: '#EC008C',
          blue: '#001A77',
          grey: '#58595B',
        },

        // Magenta
        magenta50: '#FFF0FA',
        magenta100: '#FFE3F8',
        magenta200: '#FFC6F1',
        magenta300: '#FF98E4',
        magenta400: '#FF58D0',
        magenta500: '#FF27B9',
        magenta600: '#EC008C',
        magenta700: '#DF0078',
        magenta800: '#B80063',
        magenta900: '#980355',
        magenta950: '#5F002F',

        // Blue
        blue50: '#F0F5FE',
        blue100: '#DCE8FD',
        blue200: '#C2D8FB',
        blue300: '#8BB8F8',
        blue400: '#77A1E6',
        blue500: '#638BD3',
        blue600: '#4F74C1',
        blue700: '#3C5EAE',
        blue800: '#28479C',
        blue900: '#143189',
        blue950: '#001A77',

        // Grey (Neutral)
        grey50: '#F5F6F6',
        grey100: '#E6E7E7',
        grey200: '#D0D1D1',
        grey300: '#AFB0B1',
        grey400: '#86878A',
        grey500: '#6B6C6F',
        grey600: '#58595B',
        grey700: '#4E4F50',
        grey800: '#444446',
        grey900: '#3C3D3D',
        grey950: '#252527',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
