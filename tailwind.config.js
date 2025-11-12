/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A2540',
        'brand-green': '#22C55E',
        'brand-light': '#F8F9FA',
        'brand-gray': '#6B7280',
        'brand-dark': '#111827',
        'brand-card': '#1F2937'
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
