module.exports = class {
  /**
   * Copy heading in 'POST' to navigation
   *
   * @param {string} header
   * @param {string} metainfo
   */
  static copyHeadingToNavigation (header, metainfo) {
    // Copy metainfo to 'Navigation' header
    const $h = $(header)
    const $metainfo = $(metainfo)

    // Only for permalink
    if ($h.length) {
      $metainfo.empty()
      $h.each((_, $h) => $metainfo.append($($h).clone()))
    }
  }

  /**
   * Set scroll indicator
   *
   * @param {string} indicator
   */
  static setScrollIndicator (indicator) {
    const winScroll = $(window).scrollTop()
    const height = $(document).outerHeight() - $(window).height()

    $(indicator).css('width', (winScroll / height) * 100 + '%')
  }

  /**
   * Set Styled Heading
   *
   * @param {string} container
   * @param {string} img
   * @param {string} mode
   * @param {object} options
   */
  static setStyledHeading (container, img, mode, options = {}) {
    const $container = $(container)

    options = {
      controllable: options.controllable || false,
      modeHandsControlElement: options.modeHandsControlElement || '',
      attr: options.attr || 'data-mode'
    }

    const supports = ['default', 'tape', 'screen']

    /*
     * Mode to 'default' if not exist thumbnail
     */
    if ($container.find(img).length <= 0) {
      mode = 'default'
    }

    /*
     * Mode hands control
     */
    if (options.controllable) {
      const $modeHansControl = $(options.modeHandsControlElement)
      if ($modeHansControl.length) {
        mode = $modeHansControl.attr(options.attr)
        mode = supports.includes(mode) ? mode : 'default'
        $modeHansControl.empty()
      }
    }

    $container.attr(options.attr, mode)
  }
}
