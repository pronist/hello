module.exports = class {
  /**
   * Sticky
   */
  static sticky (nav, context) {
    const contextOffsetTop = $(context).offset().top
    const $nav = $(nav)

    return () => window.pageYOffset >= contextOffsetTop
      ? $nav.addClass('sticky')
      : $nav.removeClass('sticky')
  }

  /**
   * Set scroll indicator
   *
   * @param {string} indicator
   */
  static scrollIndicator (indicator) {
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
  static styledHeading (container, img, mode, options = {}) {
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
