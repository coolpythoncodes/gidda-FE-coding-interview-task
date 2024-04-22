import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        millik: ['var(--font-millik)'],
        redHatDisplay: ['var(--font-red-hat-display)'],
      },
      colors: {
        primary: '#335F32',
        secondary: '#0A7E32',
        tertiaryYellow: '#F5F5DE',
        lightAccentGreen: '#F3FAF2',
        lightGrey: '#F0F0F0',
        darkGrey: '#4B4B4B',
      },
    },
  },
  plugins: [],
} satisfies Config;
