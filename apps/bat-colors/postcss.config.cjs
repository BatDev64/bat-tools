module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-utilities': {},
    'postcss-short': {},
    'postcss-dark-theme-class': {
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    },
    autoprefixer: {}
  }
}
