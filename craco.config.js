// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
        require("tailwindcss-children"),
        require("flowbite/plugin"),
        require("tw-elements/dist/plugin"),
      ],
    },
  },
}
