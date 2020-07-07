module.exports = {
  env: {
    browser: true
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
    ecmaVersion: 2018,
  },
  rules: {
    'no-new' : 0,
    'no-array-constructor': 0,
    'vue/require-default-prop': 0
  },
  ignorePatterns: 'dist/'
}
