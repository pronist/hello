module.exports = class {
  /**
   * List Style
   *
   * @param {string} container
   */
  static style (container, mode) {
    switch (mode) {
      case 'gallery':
      case 'grid':
        $(container).attr('class', 'uk-child-width-1-2@s uk-child-width-1-3@m')
        UIkit.grid(container)
    }
  }
}
