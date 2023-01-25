/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */
module.exports = {
  ts_session: '',
  url: '',

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: 'NONE',

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
    mode: 'index',

    /**
     * Skin Settings
     */
    skinSettings: {
      liststyle: 'list'
    },

    /**
     * Variables
     */
    variableSettings: {
      sidebar: true,
      'foldable-category': true,
      'foldable-reply': true,
      width: '720',
      toc: true,
      scrollspy: true,
      hljs: 'xcode',
      hljsDark: 'vs2015'
    }
  },

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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      ...webpackConfig.module.rules
    ]

    webpackConfig.entry = {
      vendor: './assets/vendor.js',
      ...webpackConfig.entry
    }
  }
}
