module.exports = class {
  /**
   * Set hljs Theme
   *
   * @param {string} light
   * @param {string} dark
   */
  static hljs (light, dark) {
    const theme = $('html').attr('data-theme') === 'dark' ? dark : light

    $('link#__hljs').attr(
      'href',
      `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${theme}.min.css`
    )
  }

  /**
   * Switch Skin Theme 'Light' <-> 'Dark'
   */
  static switch () {
    const TTDARK = $('html').attr('data-theme') === 'dark' ? 'Y' : 'N'

    localStorage.TTDARK = TTDARK === 'Y' ? 'N' : 'Y'
    $('html').attr('data-theme', TTDARK === 'Y' ? 'light' : 'dark')
  }
}
