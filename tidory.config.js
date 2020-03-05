const $ = require('cheerio').load(
  require('fs').readFileSync('docs/index.xml'), {
    normalizeWhitespace: true,
    xmlMode: true
  }
)

module.exports = {
  /**
   * Tistory skin name
   */
  name: $('skin > information > name').text(),

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
   * Build
   */
  build: {
    /**
     * Assets public path
     */
    public_path: null
  }
}
