/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',
        gold: '#D4A017',
        leaf: '#1B7A4E',
        cream: '#F5F0E8',
        ink: '#1A1A1A',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26, 26, 46, 0.18)',
        ring: '0 0 0 1px rgba(212, 160, 23, 0.35)',
      },
      keyframes: {
        'fab-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.55)' },
          '50%': { boxShadow: '0 0 0 18px rgba(37, 211, 102, 0)' },
        },
      },
      animation: {
        'fab-pulse': 'fab-pulse 2.4s ease-out 3',
      },
    },
  },
  plugins: [],
};
