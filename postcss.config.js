module.exports = {
  plugins: {
    // 'postcss-import': {},
    // 'postcss-cssnext': {},
    'autoprefixer': {
      browsers: [
        'last 3 versions',
        'ie >= 10',
      ]
    },
    'cssnano': {
      safe: true
    }
  }
}
