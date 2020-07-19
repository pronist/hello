module.exports = class {
  /**
   * Remove only TextNode(nodeType 3)
   *
   * @param {string} target
   */
  static removeTextNodeOnly (target) {
    $(target).contents().filter(function () {
      return this.nodeType === 3
    }).remove()
  }

  /**
   * Notification
   *
   * @param {string} notify
   * @param {string} pos
   * @param {number} timeout
   */
  static notify (notify, pos, timeout) {
    const $notify = $(notify)

    if ($notify.length > 0) {
      const $thumbnail = $notify.find('.thumbnail')
      if ($thumbnail.children('img[src$="img_relation.png"]').length > 0) {
        $thumbnail.remove()
      }
      UIkit.notification($notify.get(0).outerHTML, { pos, timeout })
      $notify.remove()
    }
  }

  /**
  * Image Alignment
  *
  * @param {string} block
  * @param {number} contentWidth
  * @param {number} maxWidth
  */
  static alignImageBlock (block, contentWidth, maxWidth) {
    $(block).each(function () {
      let width = $(this).data('origin-width')
      width = width > maxWidth ? maxWidth : width

      $(this).css({ width, 'max-width': 'none' })

      const marginLeft = (contentWidth - width) / 2
      if (marginLeft < 0) {
        $(this).css('margin-left', marginLeft)
      }
    })
  }

  /**
   * Add Id attribute in Heading elements
   *
   * @param {string} parent
   * @param {string} selector
   */
  static wrapWithAnchor (parent, selector) {
    const $parent = $(parent)
    $parent.find(selector).each(function () {
      const $heading = $(this)
      const anchor = encodeURIComponent($heading.text())
      const $a = $('<a></a>').attr('href', '#' + anchor).text($heading.text())

      $heading.attr('id', anchor).empty().append($a)
    })
  }
}
