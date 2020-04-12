module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  globals: {
    UIkit: 'readonly',
    $: 'readonly',
    hljs: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-new' : 0,
    'no-array-constructor': 0
  },
  ignorePatterns: 'dist/'
}
