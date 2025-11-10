module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1600px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInLeft: 'slideInLeft 1.5s ease-out forwards',
        slideInRight: 'slideInRight 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
