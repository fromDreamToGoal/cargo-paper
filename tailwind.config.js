/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Укажите пути к вашим файлам
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Добавление кастомного цвета
        secondary: '#9333EA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Добавление кастомного шрифта
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Пример добавления плагина
  ],
}

