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
        'color-bg': 'var(--color-bg)',
        'color-bg-light': 'var(--color-bg-light)',
      }
    }
  },
  plugins: [],
}

