const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  {
    ignores: ['**/dist/*'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]
