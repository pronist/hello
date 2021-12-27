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
    mode: 'index'
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
