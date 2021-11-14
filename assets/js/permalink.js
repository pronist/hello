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
   * set Comment Toggle Button
   *
   * @param {string} comment
   */
  static setCommentToggleButton (comment, isShow) {
    const $comment = $(comment)

    if (isShow) {
      $comment.attr({ 'aria-hidden': false })
    } else {
      $comment.attr({ 'aria-hidden': true, hidden: '' })
    }
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
   * init TistoryLayer
   *
   * @param {string} postButton
   */
  static setButtons (postButton) {
    // Trigger 'click' event for TistoryEtcLayer Display
    $('.container_postbtn .wrap_btn_etc > button').trigger('click')

    // Trigger 'click' event for correct running share buttons
    $('#tistorySnsLayer > .bundle_post > a').click(() => {
      $('.container_postbtn .postbtn_like > .wrap_btn_share > button.btn_share').trigger('click')
    })

    // Move into
    $('#tistoryEtcLayer, #tistorySnsLayer').appendTo(postButton)
  }
}
