import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
        bounce: 'bounce 3s linear infinite',
      },
      fontFamily: {
        'quicksand-regular': ['Quicksand-Regular', 'sans-serif'],
        'quicksand-medium': ['Quicksand-Medium', 'sans-serif'],
        'quicksand-semibold': ['Quicksand-SemiBold', 'sans-serif'],
        'quicksand-bold': ['Quicksand-Bold', 'sans-serif'],
      },
      screens: {
        'xs': '340px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
