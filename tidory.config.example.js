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
      theme: 'dark',
      'permalink-width': '720',
      sidebar: true,
      'foldable-category': true,
      'foldable-reply': true,
      scrollspy: true,
      toc: true,
      hljs: 'xcode',
      hljsDark: 'vs2015',
      'related-article': true,
      author: true
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
