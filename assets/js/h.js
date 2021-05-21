module.exports = class {
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
  static setAlignImageCenter (options) {
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
  static setAnchorHeadings (container, headings) {
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
  static setScrollspy (options) {
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
  static setNotification (notify, img, pos, timeout) {
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
   * List Style
   *
   * @param {string} container
   * @param {object} counts
   */
  static setListCount (container, counts) {
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
   * @param {string} img
   * @param {string} mode
   * @param {object} options
   */
  static setStyledHeading (container, img, mode, options = {}) {
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
    if ($container.find(img).length <= 0) {
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

  /**
   * Tistory Layer Tooltip
   *
   * @param {Object} messages
   */
  static setTooltipMessages (messages, isPermalink) {
    const $layerTooltip = $('.layer_tooltip')
    const $tooltip = $layerTooltip.children('.inner_layer_tooltip')
    const $reaction = $('.container_postbtn .postbtn_like .wrap_btn[id^=reaction-]')

    if (isPermalink && $reaction.length > 0) {
      setTimeout(() => {
        $layerTooltip.children('.inner_layer_tooltip').text(messages.Request)
        $layerTooltip.fadeIn(500)
      }, 5000)
      setTimeout(() => $layerTooltip.fadeOut(500), 10000)

      $reaction.click(function () {
        const tooltip = $(this).find('.btn_post > .uoc-icon').hasClass('like_on') ? messages.Unheart : messages.Heart
        $tooltip.text(tooltip)

        $layerTooltip.fadeIn(500)
        setTimeout(() => $layerTooltip.fadeOut(500), 3000)
      })
    }
    $('.btn_menu_toolbar.btn_subscription').click(function () {
      const tooltip = $(this).hasClass('following') ? messages.Unsubscribe : messages.Subscribe
      $tooltip.text(tooltip)
    })
    $('#tistorySnsLayer .btn_mark[data-service=url]').click(() => $tooltip.text(messages.Url))
  }

  /**
   * Set hljs Theme
   *
   * @param {string} light
   * @param {string} dark
   */
  static setHljsTheme (light, dark) {
    const hljsTheme = $('html').attr('data-theme') === 'light' ? light : dark
    $('link#__hljs').attr('href', `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${hljsTheme}.min.css`)
  }

  /**
   * init TistoryToolbarLayer
   *
   * @param {string} tistory
   * @param {string} subscription
   */
  static initTistoryToolbar (tistory, subscription) {
    // Copy TistoryToolbar to Sidebar
    $('.menu_toolbar > #menubar_wrapper > .header_layer').appendTo(tistory)

    // Copy TistoryToolbar to Body
    $('.menu_toolbar > div[class=btn_tool]').appendTo(subscription)
    $(subscription).find('div[class=btn_tool] > .btn_menu_toolbar.btn_subscription').append('<i class="fa fa-star"></i>')
  }

  /**
   * init TistoryLayer
   *
   * @param {string} postButton
   */
  static initTistoryLayer (postButton) {
    // Trigger 'click' event for TistoryEtcLayer Display
    $('.container_postbtn .wrap_btn_etc > button').trigger('click')

    // Trigger 'click' event for correct running share buttons
    $('#tistorySnsLayer > .bundle_post > a').click(() => {
      $('.container_postbtn .postbtn_like > .wrap_btn_share > button.btn_share').trigger('click')
    })

    // Move into
    $('#tistoryEtcLayer, #tistorySnsLayer').appendTo(postButton)
  }

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
   * Set sidebar toggle button
   *
   * @param {string} target
   * @param {string} sidebar
   * @param {string} mask
   * @param {string} width
   */
  static setSidebarToggleButton (target, sidebar, mask, width) {
    const $sidebar = $(sidebar)
    const $m = $(mask)

    $(target).on('click', () => {
      $sidebar.css('left', 0)
      $m.fadeIn(200)
    })
    $m.on('click', () => {
      $sidebar.css('left', `-${width}px`)
      $m.fadeOut(200)
    })
  }

  /**
   * set Comment Toggle Button
   *
   * @param {string} comment
   */
  static setCommentToggleButton (comment) {
    const $comment = $(comment)

    if (H.skinOptions.comment) {
      $comment.attr({ 'aria-hidden': false })
    } else {
      $comment.attr({ 'aria-hidden': true, hidden: '' })
    }
  }

  /**
   * Switch Skin Theme 'Light' <-> 'Dark'
   */
  static switchSkinTheme () {
    const TTDARK = $('html').attr('data-theme') === 'dark' ? 'Y' : 'N'

    localStorage.TTDARK = TTDARK === 'Y' ? 'N' : 'Y'
    $('html').attr('data-theme', TTDARK === 'Y' ? 'light' : 'dark')
  }

  /**
   * set List Title
   *
   * @param {string} title
   * @param {string} text
   */
  static setListTitle (title, text) {
    const $title = $(title)
    $title.text() === '전체 글' ? $title.text(text) : $title.text()
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
}
