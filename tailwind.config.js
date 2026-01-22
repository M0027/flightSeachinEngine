/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'], // Substitui a fonte padrão
        roboto: ['var(--font-roboto)', 'sans-serif'], // Ou cria uma classe específica
      },
    },
  },
  plugins: [],
}