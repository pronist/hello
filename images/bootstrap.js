class DarkMode {
  constructor () {
    /** @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually */
    this.class = 'dark'

    this.key = 'theme'
  }

  toggle () {
    localStorage.setItem(this.key, this.on ? 'light' : 'dark')
    document.documentElement.classList.toggle(this.class)
  }

  /** @return {boolean} */
  get on () {
    return document.documentElement.classList.contains(this.class)
  }

  /** @return {boolean} */
  get preferred () {
    const os = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = localStorage.getItem(this.key) || os

    return theme === 'dark'
  }
}

const darkMode = new DarkMode()

darkMode.preferred && darkMode.toggle()

/** Restore Tistory's jQuery instance for its built-in scripts and lightbox. */
// eslint-disable-next-line no-unused-vars
/* global tjQuery: readonly, $: writable */
if (Object.hasOwn(window, 'tjQuery')) {
  window.jQuery = $ = tjQuery
}
