/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */
module.exports = {
  /**
   * Tistory session cookie value
   */
  ts_session: 'f53aa642c42d71fa256746a2853482da0119dca1',

  /**
   * Tistory blog URL
   */
  url: 'https://hello-skin.tistory.com',

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
    mode: 'entry',

    /**
     * homeType
     */
    homeType: 'NONE',

    /**
     * Variable
     */
    variableSettings: {
      'list-image-mode': 'default',
      'index-width': 1100
    },

    skinSettings: {
      liststyle: 'list'
    },

    /**
     * Cover
     *
     * 804759 -> 한글 입숨
     */
    coverSettings: [
      {
        description: '',
        index: 0,
        name: 'slider-screen',
        title: 'Hello, world',
        dataType: 'RECENT',
        data: {
          category: '804759',
          size: '10'
        }
      },
      {
        description: '',
        index: 0,
        name: 'slider',
        title: 'Hello, world',
        dataType: 'RECENT',
        data: {
          category: '804759',
          size: '10'
        }
      },
      {
        description: '',
        index: 0,
        name: 'slideshow-screen',
        title: 'Hello, world',
        dataType: 'RECENT',
        data: {
          category: '804759',
          size: '10'
        }
      },
      {
        description: '',
        index: 0,
        name: 'slideshow',
        title: '',
        dataType: 'RECENT',
        data: {
          category: '804759',
          size: '10'
        }
      },
      {
        description: '',
        index: 0,
        name: 'gallery',
        title: '티스토리 (갤러리)',
        dataType: 'RECENT',
        data: {
          category: '804759',
          size: '10'
        }
      },
      {
        description: '',
        index: 0,
        name: 'grid',
        title: '티스토리 (그리드)',
        dataType: 'RECENT',
        data: {
          category: '804759',
          size: '10'
        }
      },
      {
        description: '',
        index: 0,
        name: 'list',
        title: '최신글 (리스트)',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '',
        index: 0,
        name: 'default',
        title: '최신글 (디폴트)',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      }
    ]
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      ...webpackConfig.module.rules
    ]
  }
}
