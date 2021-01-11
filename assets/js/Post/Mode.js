module.exports = class {
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
