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
}
