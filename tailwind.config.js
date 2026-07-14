/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        accentPurple: '#9945FF',
        accentGreen: '#14F195',
        accentBlue: '#3B82F6',
        primaryText: '#E2E8F0',
        mutedText: '#94A3B8',
        cardFill: 'rgba(255,255,255,0.03)',
        cardBorder: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        logo: ['Tektur', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        code: ['"Source Code Pro"', 'monospace'],
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
