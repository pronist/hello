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
    },

    /**
     * Cover Settings
     */
    coverSettings: [
      {
        description: '슬라이드쇼',
        index: 0,
        name: 'slideshow',
        title: '슬라이드쇼',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '리스트',
        index: 0,
        name: 'list',
        title: '리스트',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '그리드',
        index: 0,
        name: 'grid',
        title: '그리드',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '지그재그',
        index: 0,
        name: 'zigzag',
        title: '지그재그',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      }
    ]
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
