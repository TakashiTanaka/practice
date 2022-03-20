const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./dist/**/*.{html,js}', './dist/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
});
