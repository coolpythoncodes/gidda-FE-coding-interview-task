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
      },
    },
  },
  plugins: [],
} satisfies Config;
