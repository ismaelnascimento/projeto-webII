/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': 'var(--color-primary)',
        'color-second': 'var(--color-second)',
        'color-second-2': 'var(--color-second-2)',
        'color-bg': 'var(--color-bg)',
        'color-bg-light': 'var(--color-bg-light)',
        'color-bg-light-2': 'var(--color-bg-light-2)',
        'color-text-2': 'var(--color-text-2)',
      }
    }
  },
  plugins: [],
}

