/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          foreground: '#F5F7FF'
        }
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
