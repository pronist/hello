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
   * Preferred
   *
   * @return {boolean}
   */
  preferred () {
    const os = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = localStorage.getItem(this.key) || os

    return theme === 'dark'
  }

  /**
   * On
   */
  on () {
    document.documentElement.classList.add(this.class)
  }

  /**
   * Toggle
   */
  toggle () {
    const on = document.documentElement.classList.contains(this.class)

    localStorage.setItem(this.key, on ? 'light' : 'dark')
    document.documentElement.classList.toggle(this.class)
  }
}

window.theme = (() => {
  const darkMode = new DarkMode()
  const preferredDarkMode = darkMode.preferred()

  preferredDarkMode && darkMode.on()

  return preferredDarkMode
})()

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
