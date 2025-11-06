const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgeCSSPlugin({
      content: ['dist/**/*.html'],
      css: ['src/css/**/*.css']
    })
  ]
};