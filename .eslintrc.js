module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/base'
  ],
  plugins: [
    'html',
    'eslint-plugin-vue'
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi':0,
    'no-new':0,
    'no-undef':0
  }
}
