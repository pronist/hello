/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */
module.exports = {
  ts_session: '', // 세션 쿠키값 입력 필요
  url: 'https://overist.tistory.com',

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: 'COVER',

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
    mode: 'category'
  },

  alias: {
    '@': 'assets',
    '~views': 'views'
  },
  build: {
    /**
     * Assets public path
     */
    public_path: 'https://tistory1.daumcdn.net/tistory/5843071/skin/images/' // 배포중 번들파일 로딩 못할 시 업데이트 필요
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
