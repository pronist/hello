module.exports = class {
  /**
   * Sticky
   *
   * @param {string} target
   * @param {string} context
   * @param {string} cls
   */
  static sticky (target, context, cls) {
    const $context = $(context)

    if ($context.length) {
      const contextOffsetTop = $context.offset().top
      const $target = $(target)

      return () => window.pageYOffset >= contextOffsetTop
        ? $target.addClass(cls)
        : $target.removeClass(cls)
    }

    return () => {}
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

  /**
   * Set liststyle
   *
   * @param {string} container
   * @param {string} target
   * @param {string} attr
   */
  static liststyle (container, target, attr = 'data-mode') {
    const $container = $(container)
    const $list = $container.find(target)

    const liststyle = $container.attr(attr)

    switch (liststyle) {
      case 'gallery':
      case 'grid':
        $list.attr('class', 'uk-child-width-1-2@s uk-child-width-1-3@m')
        UIkit.grid('.list'.concat(target))
    }
  }

  /**
   * Media contents alignment
   *
   * Options:
   *
   * imageSlideBlock: boolean,
   * imageBlock: boolean
   * imageGridBlock: boolean
   *
   * @param {object} options
   */
  static alignImageCenter (options) {
    const alignImage = function (width) {
      width = width > 1100 ? 1100 : width
      $(this).css({ width, 'max-width': 'none', 'margin-left': `calc((100% - ${width}px) / 2)` })
    }

    if (options.imageSlideBlock) {
      $('figure.imageslideblock.alignCenter').each(function () {
        alignImage.call(this, $(this).find('.image-wrap.selected > img').data('origin-width'))
      })
    }
    if (options.imageBlock) {
      $('figure.imageblock.alignCenter').each(function () {
        alignImage.call(this, $(this).data('origin-width') || $(this).attr('width') || $(this).width())
      })
    }
    if (options.imageGridBlock) {
      $('figure.imagegridblock').each(function () {
        alignImage.call(this, 1100)
      })
    }
  }

  /**
   * Add 'a' tag into headings
   *
   * @param {string} container
   * @param {string} headings
   */
  static anchorHeadings (container, headings) {
    $(container).find(headings).each(function () {
      const $heading = $(this)
      const anchor = encodeURIComponent($heading.text()).replace(/[0-9-_.!~*'()\s]/g, '-')
      const $a = $('<a></a>').attr('href', '#' + anchor).text($heading.text())
      const htmlContent = $heading.html()

      $a.html(htmlContent)
      $heading.attr('id', anchor).empty().append($a)
    })
  }

  /**
   * Create a Scrollspy
   *
   * Options:
   *
   * context: string - a Container that contains headings
   * spy: string - Scrollspy
   * headings: string - Heading Tags that will be extracted
   *
   * @param {object} options
   */
  static scrollspy (options) {
    /**
     * Extract Headings from target
     *
     * @param {string} headings
     */
    const extractHeadings = ($context, headings) => {
      return $context.find(headings).get().reduce((spies, heading) => {
        const $heading = $(heading)
        const anchor = $heading.find('a').attr('href')
        spies.push({ href: anchor, label: $heading.text(), tag: $heading.prop('tagName').toLowerCase() })
        return spies
      }, [])
    }
    const $spy = $(options.spy)
    const $context = $(options.context)

    extractHeadings($context, options.headings).forEach(spy => {
      const $a = $('<a></a>')
        .text(spy.label)
        .attr({ href: spy.href, 'data-tag': spy.tag })

      $spy.append($('<li></li>').append($a))
    })
  }

  /**
   * Notification
   *
   * @param {string} notify
   * @param {string} pos
   * @param {string} img
   * @param {number} timeout
   */
  static notification (notify, img, pos, timeout) {
    const $notify = $(notify)

    if ($notify.length > 0) {
      const $thumbnail = $notify.find(img)

      if ($thumbnail.attr('src').indexOf('img_relation.png') > 0) {
        $thumbnail.remove()
      }

      UIkit.notification($notify.get(0).outerHTML, { pos, timeout })
      $notify.remove()
    }
  }

  /**
   * Tistory Layer Tooltip
   *
   * @param {Object} messages
   */
  static tooltip (messages, isPermalink) {
    const $layerTooltip = $('.layer_tooltip')
    const $tooltip = $layerTooltip.children('.inner_layer_tooltip')
    const $reaction = $('.container_postbtn .postbtn_like .wrap_btn[id^=reaction-]')

    if (isPermalink && $reaction.length) {
      setTimeout(() => {
        $layerTooltip.children('.inner_layer_tooltip').text(messages.Request)
        $layerTooltip.fadeIn(500)
      }, 5000)

      setTimeout(() => $layerTooltip.fadeOut(500), 10000)

      $reaction.click(function () {
        const tooltip = $(this).find('.btn_post > .uoc-icon').hasClass('like_on')
          ? messages.Unheart
          : messages.Heart

        $tooltip.text(tooltip)

        $layerTooltip.fadeIn(500)
        setTimeout(() => $layerTooltip.fadeOut(500), 3000)
      })
    }

    $('.btn_menu_toolbar.btn_subscription').click(function () {
      const tooltip = $(this).hasClass('following')
        ? messages.Unsubscribe
        : messages.Subscribe

      $tooltip.text(tooltip)
    })

    $('#tistorySnsLayer .btn_mark[data-service=url]').click(() => {
      $tooltip.text(messages.Url)
    })
  }

  /**
   * Set foldable category
   */
  static foldableCategory () {
    UIkit.accordion('.tt_category .category_list', {
      content: '> .sub_category_list',
      targets: '> .foldable',
      toggle: '> .link_item',
      multiple: true
    })

    const $subCategory = $('.tt_category .sub_category_list')

    if ($subCategory.length) {
      $subCategory.prev('.link_item').append('<i class="fas fa-chevron-down"></i>')
      $subCategory.parent().addClass('foldable')
    }
  }

  /**
   * Switch Skin Theme 'Light' <-> 'Dark'
   */
  static switchTheme (el = 'html', attr = 'data-theme') {
    const TTDARK = $(el).attr(attr) === 'dark' ? 'Y' : 'N'

    localStorage.TTDARK = TTDARK === 'Y' ? 'N' : 'Y'
    $('html').attr('data-theme', TTDARK === 'Y' ? 'light' : 'dark')
  }

  /**
   * Set hljs
   *
   * @param {string} light
   * @param {string} dark
   */
  static hljs (light, dark, el = 'html', attr = 'data-theme') {
    const hljs = $(el).attr(attr) === 'dark' ? dark : light

    $('link#__hljs').attr(
      'href',
      `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${hljs}.min.css`
    )
  }

  /**
   * Remove TextNode
   *
   * @param {string} selector
   */
  static removeTextNode (selector) {
    $(selector).contents().filter(function () {
      return this.nodeType === 3
    }).remove()
  }
}
