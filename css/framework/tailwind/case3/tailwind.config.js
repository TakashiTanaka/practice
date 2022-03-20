const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
