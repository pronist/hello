module.exports = class {
  /**
   * Switch Theme
   */
  static switch () {
    const TTDARK = $('html').attr('data-theme') === 'dark' ? 'Y' : 'N'

    localStorage.TTDARK = TTDARK === 'Y' ? 'N' : 'Y'
    $('html').attr('data-theme', TTDARK === 'Y' ? 'light' : 'dark')
  }

  /**
   * Set hljs Theme
   */
  static hljs () {
    const hljsTheme = $('html').attr('data-theme') === 'light' ? 'xcode' : 'vs2015'

    $('link#hljs').attr('href', `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${hljsTheme}.min.css`)
  }
}
