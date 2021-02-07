module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard'
  ],
  globals: {
    UIkit: 'readonly',
    $: 'readonly',
    hljs: 'readonly',
    H: 'readonly',
    h: 'readonly',
    T: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-array-constructor': 0
  },
  ignorePatterns: 'dist/'
}
