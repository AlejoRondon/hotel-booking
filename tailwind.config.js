//?https://stackoverflow.com/questions/65179304/tailwind-in-react-project-getting-cannot-find-module-autoprefixer-error-du

// npm uninstall tailwindcss postcss autoprefixer
// npm install tailwindcss@latest postcss@latest autoprefixer@latest

// npx tailwindcss init -p

// npm uninstall tailwindcss postcss autoprefixer
// npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
