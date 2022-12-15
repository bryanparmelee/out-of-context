/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-5px)'
           },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-left': {
          '0%, 75%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
  
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      }, 
      animation: {
        'quote-fade': 'fade-in 1s ease-in',
        'author-fade': 'fade-left 1.2s ease-in'
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['EB Garamond', 'serif']
    }

  },
  plugins: [],
}
