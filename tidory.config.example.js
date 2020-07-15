/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */

module.exports = {
  /**
   * Tistory session cookie value
   */
  ts_session: null,

  /**
   * Tistory blog URL
   */
  url: null,

  /**
   * Preview
   */
  preview: {
    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag,
     * location
     * media,
     * guestbook
     */
    mode: 'index'
  },

  /**
   * Template aliases
   */
  alias: {
    '@': 'assets',
    '~views': 'views'
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends (webpackConfig) {
    webpackConfig.module.rules = [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      ...webpackConfig.module.rules
    ]
  }
}
