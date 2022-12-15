/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%, 25%': { 
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
        'quote-fade': 'fade-in 2s ease-in',
        'author-fade': 'fade-left 2.2s ease-in'
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['EB Garamond', 'serif']
    }

  },
  plugins: [],
}
