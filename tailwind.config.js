const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  safelist: [
    'backdrop-blur-sm', // Tambahkan kelas ini jika perlu
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#eef5ff',
          '100': '#dae9ff',
          '200': '#bdd9ff',
          '300': '#90c1ff',
          '400': '#4f98ff',
          '500': '#357afc',
          '600': '#1f5af1',
          '700': '#1744de',
          '800': '#1939b4',
          '900': '#1a348e',
          '950': '#152256',
        },
      }
    },
  },
  darkMode: "class",
  plugins: [
  ],
}