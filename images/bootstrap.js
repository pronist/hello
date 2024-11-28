class DarkMode {
  /**
   * Create DarkMode Instance
   */
  constructor () {
    /**
     * Class name
     *
     * @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
     * @type {string}
     */
    this.class = 'dark'

    /**
     * Key name in LocalStorage
     *
     * @type {string}
     */
    this.key = 'theme'
  }

  /**
   * Toggle
   */
  toggle () {
    localStorage.setItem(this.key, this.on ? 'light' : 'dark')
    document.documentElement.classList.toggle(this.class)
  }

  /**
   * On?
   *
   * @return {boolean}
   */
  get on () {
    return document.documentElement.classList.contains(this.class)
  }

  /**
   * Preferred
   *
   * @return {boolean}
   */
  get preferred () {
    const os = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = localStorage.getItem(this.key) || os

    return theme === 'dark'
  }
}

/**
 * Set dark Mode
 */
const darkMode = new DarkMode()

darkMode.preferred && darkMode.toggle()

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
