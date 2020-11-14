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
   * List Style
   *
   * @param {string} container
   * @param {object} counts
   */
  static list (container, counts) {
    const $container = $(container)
    const mode = $container.parent().attr('data-mode')

    if (mode === 'grid' || mode === 'gallery') {
      switch (mode) {
        case 'gallery':
          $container.find('.summary, .date').remove()
          break
      }
      $container.attr('class', `uk-child-width-1-2@s uk-child-width-1-${mode === 'grid'
        ? counts.grid
        : counts.gallery}@m`
      )
      UIkit.grid(container)
    }
  }

  /**
   * Set Styled Heading
   *
   * @param {string} container
   * @param {string} mode
   * @param {object} options
   */
  static setStyledHeading (container, mode, options = {}) {
    const $container = $(container)

    options = {
      controllable: options.controllable || false,
      modeHansControlElement: options.modeHansControlElement || '',
      attr: options.attr || 'data-mode'
    }

    const supports = ['default', 'tape', 'screen']

    /**
    * Mode to 'default' if not exist thumbnail
    */
    if (!$container.find('header > .img').length) {
      mode = 'default'
    }

    /**
     * Mode hands control
     */
    if (options.controllable) {
      const $modeHansControl = $(options.modeHansControlElement)
      if ($modeHansControl.length) {
        mode = $modeHansControl.attr(options.attr)
        mode = supports.includes(mode) ? mode : 'default'
        $modeHansControl.empty()
      }
    }

    $container.attr(options.attr, mode)
  }
}
