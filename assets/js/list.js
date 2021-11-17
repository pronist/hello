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

  /**
   * set List Title
   *
   * @param {string} title
   * @param {string} text
   */
  static title (title, text) {
    const $title = $(title)

    if ($title.text() === '전체 글') {
      $title.text(text)
    }
  }
}
