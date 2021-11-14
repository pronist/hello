module.exports = class {
  /**
   * List Style
   *
   * @param {string} container
   */
  static setStyle (container, mode) {
    const $container = $(container)

    switch (mode) {
      case 'gallery':
      case 'grid':
        $container.attr('class', 'uk-child-width-1-2@s uk-child-width-1-3@m')
        UIkit.grid(container)
    }
  }

  /**
   * set List Title
   *
   * @param {string} title
   * @param {string} text
   */
  static setTitle (title, text) {
    const $title = $(title)
    $title.text() === '전체 글' ? $title.text(text) : $title.text()
  }
}
