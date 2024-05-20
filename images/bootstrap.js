class Theme {
  /**
   * Create Theme Instance
   */
  constructor () {
    /**
     * Class name for dark mode
     *
     * @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
     * @type {string}
     */
    this.className = 'dark'

    /**
     * Key name in LocalStorage for dark mode
     *
     * @type {string}
     */
    this.key = 'TTDARK'
  }

  /**
   * Is dark
   *
   * @return {boolean}
   */
  isDark () {
    const os = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Y' : 'N'
    const signal = localStorage.getItem(this.key) || os

    return signal === 'Y'
  }

  /**
   * Add new theme
   *
   * @param {string} className
   */
  add (className) {
    document.documentElement.classList.add(className)
  }

  /**
   * Set Default Theme
   */
  setDefault () {
    this.isDark() && this.add(this.className)
  }

  /**
   * Toggle Theme
   */
  toggle () {
    localStorage.setItem(this.key, document.documentElement.classList.contains(this.className) ? 'N' : 'Y')
    document.documentElement.classList.toggle(this.className)
  }
}

const theme = new Theme()
theme.setDefault()

window.TTDARK = theme.isDark()

/**
 * Console Issues
 *
 * Uncaught TypeError: Cannot read properties of null (reading 'click')
 * Uncaught TypeError: a is not a function
 * jQuery.Deferred exception: lightbox is not defined ReferenceError: lightbox is not defined
 * Uncaught ReferenceError: lightbox is not defined
 */
// eslint-disable-next-line no-unused-vars
/* global tjQuery: readonly, $: writable */
window.jQuery = $ = tjQuery
